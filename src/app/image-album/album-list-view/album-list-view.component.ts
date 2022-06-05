import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list-view',
  templateUrl: './album-list-view.component.html',
  styleUrls: ['./album-list-view.component.scss'],
})
export class AlbumListViewComponent implements OnInit {
  listOfAlbums: any;
  albumId: any;
  constructor(
    private albumService: AlbumService,
    // private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((data) => {
    //   this.albumId = data['id'];
    // });

    this.albumService.listOfAlbums().subscribe((data: any) => {
      if (data !== undefined) {
        this.listOfAlbums = data;
        console.log(this.listOfAlbums);
        // this.albumId = this.listOfAlbums[1].album_id;
        console.log(data[0].album_id);
      }
    });
  }
}
