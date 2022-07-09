import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
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


  listAboutUs(){
    return this.http.get(this.baseUrl + 'about-us/', {
      headers: this.generateHedaer(),
    });
  }

  addAboutUs(aboutUsObj : any){
    return this.http.post(this.baseUrl +'about-us/', aboutUsObj, {
      headers: this.generateHedaer(),
    } );
  }

  deleteAboutUs(id : any){
    return this.http.delete(this.baseUrl+ 'about-us/'+ id, {
      headers: this.generateHedaer(),
    } );
  }

  UpdateAboutUs(id:any, aboutUsObj :any){
    return this.http.put(this.baseUrl+ 'about-us/' + id, aboutUsObj, {
      headers: this.generateHedaer(),
    } );
  }
  viewAboutUs(id : String){
    return this.http.get(this.baseUrl + 'about-us/'+ id , {
      headers: this.generateHedaer(),
    });
  }
}