import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
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

  listAdmin(){
    return this.http.get(this.baseUrl + 'admins/');
  }

  addAdmin(adminObj : any){
    return this.http.post(this.baseUrl +'admins/', adminObj );
  }

  generateADminToken(){
    return this.http.post(this.baseUrl +'generateJWTToken/admin/', {} );
  }

  generateMainADminToken(){
    return this.http.post(this.baseUrl +'generateJWTToken/mainadmin/', {} );
  }
}
