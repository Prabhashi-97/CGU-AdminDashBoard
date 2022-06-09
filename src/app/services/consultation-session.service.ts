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
}
