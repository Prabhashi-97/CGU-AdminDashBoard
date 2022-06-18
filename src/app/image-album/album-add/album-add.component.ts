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

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
})
export class AlbumAddComponent implements OnInit {
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
        console.log(this.addAlbumForm.value);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.router.navigate(['./image-album/list']);
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
