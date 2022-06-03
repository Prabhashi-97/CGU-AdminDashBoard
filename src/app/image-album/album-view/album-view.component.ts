import { Component, OnInit } from '@angular/core';
import { AlbumService } from './../../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
})
export class AlbumViewComponent implements OnInit {
  AlbumDetails: any;
  albumId: string = '';

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      // console.log(data.id);
      this.albumId = data.albumId;
      console.log(this.albumId);
    });
    this.albumService.viewAlbum(this.albumId).subscribe((data) => {
      this.AlbumDetails = data;
      console.log(this.AlbumDetails);
    });
  }

  // this.activatedRoute.params.subscribe((data) => {
  //   this.albumId = data['id'];
  // });

  // this.albumService.listOfAlbums().subscribe((data: any) => {
  //   if (data !== undefined) {
  //     console.log(this.listOfAlbums);
  //     this.listOfAlbums = data;
  //   }
  // });
}
