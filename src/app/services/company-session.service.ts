import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanySessionService {
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }

  listSessionPendingRequests() {
    return this.http.get(this.baseUrl + 'comSessions/pending', {
      headers: this.generateHedaer(),
    });
  }

  listSessionAcceptedRequests() {
    return this.http.get(this.baseUrl + 'comSessions/accepted', {
      headers: this.generateHedaer(),
    });
  }

  acceptSession(id: any, programObj: any) {
    return this.http.put(this.baseUrl + 'comSessions/' + id, programObj , {
      headers: this.generateHedaer(),
    });
  }

  deleteSession(id: any, sessionObj: any) {
    return this.http.delete(this.baseUrl + 'comSessions/' + id, {
      body: sessionObj, headers: this.generateHedaer(),
    });
  }

  viewSession(id: String) {
    return this.http.get(this.baseUrl + 'comSessions/' + id , {
      headers: this.generateHedaer(),
    });
  }

  viewCompany(email : String){
    return this.http.get(this.baseUrl + 'company/'+ email );
  }

  editSession(id:any, sessionObj :any){
    return this.http.put(this.baseUrl+ 'comSessions/' + id, sessionObj );
  }

  getUndergrads(id:any){
    return this.http.get(this.baseUrl + 'registerSession/'+ id );
  }
 }
