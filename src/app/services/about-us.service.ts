import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }


  listAboutUs(){
    return this.http.get(this.baseUrl + 'about-us/');
  }

  addAboutUs(aboutUsObj : any){
    return this.http.post(this.baseUrl +'about-us/', aboutUsObj );
  }

  deleteAboutUs(id : any){
    return this.http.delete(this.baseUrl+ 'about-us/'+ id );
  }

  UpdateAboutUs(id:any, aboutUsObj :any){
    return this.http.put(this.baseUrl+ 'about-us/' + id, aboutUsObj );
  }
  viewAboutUs(id : String){
    return this.http.get(this.baseUrl + 'about-us/'+ id );
  }
}