import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-album-delete',
  templateUrl: './album-delete.component.html',
  styleUrls: ['./album-delete.component.scss'],
})
export class AlbumDeleteComponent implements OnInit {
  AlbumDetails: any;
  albumId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.albumId = data.albumId;
    });

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'No, cancel!',
        confirmButtonText: 'Yes, delete!',

        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.albumId) {
            this.albumService.deleteAlbum(this.albumId).subscribe(
              (data) => {
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Album has been deleted.',
                  'success'
                );
                this.router.navigateByUrl('/image-album/list');
              },
              (err) => {
                swalWithBootstrapButtons.fire(
                  'Unable to Delete!',
                  'Album cannot be deleted.',
                  'error'
                );
              }
            );
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Cancelled', '', 'error');
          this.router.navigateByUrl('/image-album/list');
        }
      });
  }
}
