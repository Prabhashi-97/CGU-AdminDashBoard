import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  readonly baseUrl: string = 'http://localhost:3000/image-album';
  constructor(private http: HttpClient) {}

  listOfAlbums() {
    return this.http.get(this.baseUrl);
  }

  createAlbum(albumObj: any) {
    // console.log(albumObj);
    return this.http.post(this.baseUrl, albumObj);
  }

  uploadImage(image: FormData) {
    return this.http.post(this.baseUrl, image);
  }
  viewAlbum(id: string) {
    // console.log(id);
    return this.http.get(this.baseUrl + '/' + id);
  }

  deleteAlbum(id: any) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateAlbum(id: any, albumObj: any) {
    return this.http.put(this.baseUrl + id, albumObj);
  }
}
