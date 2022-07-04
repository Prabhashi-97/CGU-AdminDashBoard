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
    return this.http.get(this.baseurl + 'vacancies/');   
  }

  ViewVacancies(vacancyId:String){
    return this.http.get(this.baseurl +'vacancies/' + vacancyId);
  }

  deleteVacancies(vacancyId: any){
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId);
  }

  deleteAcceptedVacancies(vacancyId: any){
    return this.http.delete(this.baseurl + 'vacancies/delete/' + vacancyId);
  }

  acceptVacancies(vacancyId: any,vacancyObj: any){
    return this.http.put(this.baseurl + 'vacancies/'+vacancyId, vacancyObj);
  }

  listPendingVacancies(){
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/' );
  }

  listAcceptedVacancies(){
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancy');
  }

  listLinks(){
    return this.http.get(this.baseurl + 'vacancies/apply');
  }

  sendEmail(id:String){
    return this.http.get(this.baseurl + 'vacancies/applyVacancies/' +id);
  }
}


