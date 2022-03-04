import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  @Input() album?: Album;
  @Input() albumId: number = 0;
  constructor() {}

  ngOnInit(): void {
    console.log(this.album);
  }

  onDelete() {
    console.log(this.album);
    console.log(this.albumId);
    console.log(`Delete called`);
  }

  // onEdit() {
  //   this.router.navigate(['/edit/:id', this.index]);
  // }

  // albumViewCall() {
  //   this.router.navigate(['/view/:id', this.index]);
  // }
}
