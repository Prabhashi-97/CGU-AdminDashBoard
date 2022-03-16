import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listConsultants(){
    return this.http.get(this.baseUrl+ 'consultants/list');
      //this users should be chnaged according to our requirments 
  }
  viewConsultant(consultantId: string){
    return this.http.get(this.baseUrl +'consultants/view/' + consultantId);
      //this users should be chnaged according to our requirments 
  }
  addConsultant(consultantObj: any){
    return this.http.post(this.baseUrl+ 'consultants/add/' , consultantObj);
      //this users should be chnaged according to our requirments
  }
  deleteConsultant(consultantId: any){
    return this.http.delete(this.baseUrl+'consultants/delete/'+ consultantId);
  }
  updateConsultant(consultantId: any, consultantObj: any){
    console.log(consultantId);
    return this.http.put(this.baseUrl +'consultants/update/'+consultantId, consultantObj);
  }
}
