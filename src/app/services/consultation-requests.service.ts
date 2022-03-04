import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationRequestsService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listPendingConsultationRequests(){
    return this.http.get(this.baseUrl+ 'consultationRequests/list');
      
  }
  // viewConsultant(consultantId: string){
  //   return this.http.get(this.baseUrl +'consultants/view/' + consultantId);
      
  // }
  // addConsultant(consultantObj: any){
  //   return this.http.post(this.baseUrl+ 'consultants/add/' , consultantObj);
      
  // }
  // deleteConsultant(consultantId: any){
  //   return this.http.delete(this.baseUrl+'consultants/delete/'+ consultantId);
  // }
  // updateConsultant(id: any, consultantObj: any){
  //   return this.http.put(this.baseUrl +'consultants/update/'+id, consultantObj);
  // }
}
