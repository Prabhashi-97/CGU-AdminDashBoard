import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.albumId = data['id'];
    });

    this.albumService.listOfAlbums().subscribe((data: any) => {
      if (data !== undefined) {
        console.log(this.listOfAlbums);
        this.listOfAlbums = data;
      }
    });
  }
  addAlbumCall() {
    this.router.navigate(['create']);
  }
}
