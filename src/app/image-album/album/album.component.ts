import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  url: SafeResourceUrl | undefined;
  constructor(
    private activatedRoute: ActivatedRoute // private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data !== undefined) {
        this.albumDetails = data;
        this.albumId = this.album?.album_id;
      }
    });
  }
}

// -----------------------------------------------------------------------

// public url: SafeResourceUrl;

// constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
//   this.getImage('URL').subscribe(x => this.url = x)
// }

// public getImage(url: string): Observable<SafeResourceUrl> {
//   return this.http
//     .get(url, { responseType: 'blob' })
//     .pipe(
//       map(x => {
//         const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
//         return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
//       }),
//     );
// }
