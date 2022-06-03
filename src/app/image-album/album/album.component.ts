import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album?: Album;
  @Input() albumId: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.albumId = this.activatedRoute.snapshot.params.id;
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
