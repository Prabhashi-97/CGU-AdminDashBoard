import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  readonly baseUrl: string = 'http://localhost:3000/image-album';
  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();
  constructor(private http: HttpClient) {}

  listOfAlbums() {
    return this.http.get(this.baseUrl);
  }

  createAlbum(albumObj: any) {
    return this.http.post(this.baseUrl, albumObj);
  }

  upload(file: any) {
    return this.http.post(this.baseUrl + '/upload', file, {
      reportProgress: true,
      responseType: 'json',
    });
    // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, file, {
    //   reportProgress: true,
    //   responseType: 'json',
    // });
    // return this.http.request(req);
  }

  viewAlbum(id: String) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl + '/upload');
  }

  deleteAlbum(id: any) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateAlbum(id: any, albumObj: any) {
    return this.http.put(this.baseUrl + '/' + id, albumObj);
  }
}
