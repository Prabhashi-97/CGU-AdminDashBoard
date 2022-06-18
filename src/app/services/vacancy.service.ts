import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  listVacancies(){
    return this.http.get(this.baseurl + 'vacancies/');
  }

  ViewVacancies(vacancyId:String){
    return this.http.get(this.baseurl +'vacancies/' + vacancyId);
  }

  deleteVacancies(vacancyId: any){
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId);
  }

  acceptVacancies(vacancyId: any,vacancyObj: any){
    return this.http.put(this.baseurl + 'vacancies/'+vacancyId, vacancyObj);
  }

  listPendingVacancies(){
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/');
  }

  listAcceptedVacancies(){
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancy');
  }

  listLinks(){
    return this.http.get(this.baseurl + 'vacancies/apply');
  }
}


