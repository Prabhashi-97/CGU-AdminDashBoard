import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ActivatedRoute } from '@angular/router';
// import { count } from 'console';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album?: Album;
  albumDetails: any;
  albumId: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data !== undefined) {
        this.albumDetails = data;
        this.albumId = this.album?.album_id;
        console.log(this.albumId);
      }
    });
  }

  onDelete() {
    console.log(this.album);
    this.albumId = this.album?.album_id;
    console.log(this.albumId);
    console.log(`Delete called`);
  }
}
