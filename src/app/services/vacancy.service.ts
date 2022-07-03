import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }
  
  listVacancies(){
    return this.http.get(this.baseurl + 'vacancies/', { 
      headers: this.generateHedaer(),
    });   
  }

  ViewVacancies(vacancyId:String){
    return this.http.get(this.baseurl +'vacancies/' + vacancyId);
  }

  deleteVacancies(vacancyId: any){
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId, { 
      headers: this.generateHedaer(),
    });
  }

  deleteAcceptedVacancies(vacancyId: any){
    return this.http.delete(this.baseurl + 'vacancies/delete/' + vacancyId, { 
      headers: this.generateHedaer(),
    });
  }

  acceptVacancies(vacancyId: any,vacancyObj: any){
    return this.http.put(this.baseurl + 'vacancies/'+vacancyId, vacancyObj, { 
      headers: this.generateHedaer(),
    });
  }

  listPendingVacancies(){
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/' , { 
      headers: this.generateHedaer(),
    });
  }

  listAcceptedVacancies(){
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancy', { 
      headers: this.generateHedaer(),
    });
  }

  listLinks(){
    return this.http.get(this.baseurl + 'vacancies/apply', { 
      headers: this.generateHedaer(),
    });
  }

  sendEmail(id:String){
    return this.http.get(this.baseurl + 'vacancies/applyVacancies/' +id);
  }
}


