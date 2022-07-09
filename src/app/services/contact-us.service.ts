import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
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


  listContactUs(){
    return this.http.get(this.baseUrl + 'contact-us/', {
      headers: this.generateHedaer(),
    });
  }

  viewContactUs(id : String){
    return this.http.get(this.baseUrl + 'contact-us/'+ id , {
      headers: this.generateHedaer(),
    });
  }

  addContactUs(newsObj : any){
    return this.http.post(this.baseUrl +'contact-us/', newsObj, {
      headers: this.generateHedaer(),
    } );
  }

  deleteContactUs(ID : any){
    console.log(ID)
    return this.http.delete(this.baseUrl+ 'contact-us/'+ ID, {
      headers: this.generateHedaer(),
    } );
  }

  UpdateContactUs(id:any, newsObj :any){
    return this.http.put(this.baseUrl+ 'contact-us/' + id, newsObj, {
      headers: this.generateHedaer(),
    } );
  }
  
  listContactsbyFac(Faculty:any){
    return this.http.get(this.baseUrl +'contact-us/Faculty/' + Faculty);
  }

}