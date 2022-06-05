import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
})
export class AlbumAddComponent implements OnInit {
  fileName = '';
  selectedFile: any;

  addAlbumForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addAlbumForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(100),
      ]),
      description: new FormControl('', [Validators.required]),
    });
  }

  createNewAlbum() {
    this.albumService.createAlbum(this.addAlbumForm.value).subscribe(
      (data: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Album Created Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/image-album/list');
      },
      (err: any) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Unable to Create Album',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);

  //   this.albumService.uploadImage(fd).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
