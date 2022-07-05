import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  baseUrl: string = 'http://localhost:3000/';
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

  listConsultants(){
    return this.http.get(this.baseUrl+ 'consultants/list',{headers: this.generateHedaer(),});
  }
  viewConsultant(consultantId: string){
    return this.http.get(this.baseUrl +'consultants/view/' + consultantId,{headers: this.generateHedaer(),});
  }
  addConsultant(consultantObj: any){
    return this.http.post(this.baseUrl+ 'consultants/add/' , consultantObj,{headers: this.generateHedaer(),});
  }
  deleteConsultant(consultantId: any){
    return this.http.delete(this.baseUrl+'consultants/delete/'+ consultantId,{headers: this.generateHedaer(),});
  }
  updateConsultant(consultantId: any, consultantObj: any){
    console.log(consultantId);
    return this.http.put(this.baseUrl +'consultants/update/'+consultantId, consultantObj,{headers: this.generateHedaer(),});
  }


}
