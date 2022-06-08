// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }


  listNews(){
    return this.http.get(this.baseUrl + 'news/');
  }

//   viewProgram(id : String){
//     return this.http.get(this.baseUrl + 'programs/'+ id );
//   }

  addNews(programObj : any){
    return this.http.post(this.baseUrl +'news/', programObj );
  }

//   deleteProgram(id : any){
//     return this.http.delete(this.baseUrl+ 'programs/'+ id );
//   }

//   editProgram(id:any, programObj :any){
//     return this.http.put(this.baseUrl+ 'programs/' + id, programObj );
//   }
 }

