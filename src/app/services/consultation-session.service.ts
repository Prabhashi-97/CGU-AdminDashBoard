import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationSessionService {
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
  
  listConsultationRequests(){
    return this.http.get(this.baseUrl+ 'consultation-Requests/list',{headers: this.generateHedaer(),});
      
  }
  listScheduledSessions(){
    return this.http.get(this.baseUrl + 'scheduled-sessions/list',{headers: this.generateHedaer(),});
  }
  sendEmail(undergradEmail: any, requestObj:any){
    return this.http.post(this.baseUrl + 'email/'+undergradEmail, requestObj,{headers: this.generateHedaer(),});
  }
  listRequestsbyType(sessionType:any){
    return this.http.get(this.baseUrl+ 'consultation-Requests/list/'+sessionType,{headers: this.generateHedaer(),});
  }
  listSessionsbyType(scheduledSessionType:any){
    return this.http.get(this.baseUrl+ 'consultation-sessions/list/'+scheduledSessionType,{headers: this.generateHedaer(),});
  }
  displayUnderScheduled(consultation_id:any, consultationObj:any){
    return this.http.put(this.baseUrl +'scheduled-session/'+consultation_id, consultationObj,{headers: this.generateHedaer(),});
  }
  deleteSession(consultation_id: any){
    return this.http.delete(this.baseUrl+'scheduled-session/delete/'+ consultation_id,{headers: this.generateHedaer(),});
  }
  
}
