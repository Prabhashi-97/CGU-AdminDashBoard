import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }

  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }


  listNews(){
    return this.http.get(this.baseUrl + 'news/', {
      headers: this.generateHedaer(),
    });
  }

  viewNews(id : String){
    return this.http.get(this.baseUrl + 'news/'+ id , {
      headers: this.generateHedaer(),
    });
  }

  addNews(newsObj : any){
    return this.http.post(this.baseUrl +'news/', newsObj, {
      headers: this.generateHedaer(),
    } );
  }

  deleteNews(id : any){
    console.log(id)
    return this.http.delete(this.baseUrl+ 'news/'+ id, {
      headers: this.generateHedaer(),
    } );
  }

  UpdateNews(id:any, newsObj :any){
    return this.http.put(this.baseUrl+ 'news/' + id, newsObj, {
      headers: this.generateHedaer(),
    } );
  }

  // getUndergrads(id:any){
  //   return this.http.get(this.baseUrl + 'registerEvent/'+ id );
  // }
}
