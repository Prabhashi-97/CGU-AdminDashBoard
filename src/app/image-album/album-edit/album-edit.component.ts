import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './../../services/album.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],
})
export class AlbumEditComponent implements OnInit {
  albumId: any;
  albumDetails: any;
  dataLoaded: boolean = false;
  editAlbumForm: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.albumId = data.albumId;
      console.log(this.albumId);
    });
    if (this.albumId !== '') {
      this.albumService
        .viewAlbum(this.albumId)
        .toPromise()
        .then((data) => {
          this.albumDetails = data;
          Object.assign(this.albumDetails, data);
          // console.log(this.albumDetails[0].name);

          this.editAlbumForm = this.formBuilder.group({
            name: new FormControl(this.albumDetails[0].name, [
              Validators.required,
            ]),
            description: new FormControl(this.albumDetails[0].description, [
              Validators.required,
            ]),
            createdDate: new FormControl(this.albumDetails[0].createdDate, [
              Validators.required,
            ]),
          });
          this.dataLoaded = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // ---------------------------------------------------------------
  }
  updateAlbum() {
    this.albumService
      .updateAlbum(this.albumId, this.editAlbumForm.value)
      .subscribe(
        (data: any) => {
          console.log(this.editAlbumForm.value);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Album Updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigateByUrl('/image-album/list');
        },
        (err: any) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unable to Update Album',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  }
}
