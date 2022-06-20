import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationSessionService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listConsultationRequests(){
    return this.http.get(this.baseUrl+ 'consultation-Requests/list');
      
  }
  listScheduledSessions(){
    return this.http.get(this.baseUrl + 'scheduled-sessions/list');
  }
  sendEmail(undergradEmail: any, requestObj:any){
    return this.http.post(this.baseUrl + 'email/'+undergradEmail, requestObj);
  }
  listRequestsbyType(sessionType:any){
    return this.http.get(this.baseUrl+ 'consultation-Requests/list/'+sessionType);
  }
  listSessionsbyType(scheduledSessionType:any){
    return this.http.get(this.baseUrl+ 'consultation-sessions/list/'+scheduledSessionType);
  }
  displayUnderScheduled(consultation_id:any, consultationObj:any){
    return this.http.put(this.baseUrl +'scheduled-session/'+consultation_id, consultationObj);
  }
  deleteSession(consultation_id: any){
    return this.http.delete(this.baseUrl+'scheduled-session/delete/'+ consultation_id);
  }
  
}
