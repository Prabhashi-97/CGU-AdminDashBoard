import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from './../../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
})
export class AlbumViewComponent implements OnInit {
  albumDetails: any;

  albumId: any;
  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data !== undefined) {
        this.albumId = data.albumId;
      }
    });
    console.log(this.albumId);
    this.albumService.viewAlbum(this.albumId).subscribe((data) => {
      this.albumDetails = data;
    });
  }
}
