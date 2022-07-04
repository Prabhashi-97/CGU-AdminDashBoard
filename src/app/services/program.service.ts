import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  baseUrl :string='http://localhost:3000/';

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


  // listPrograms(){
  //   return this.http.get(this.baseUrl + 'programs/');
  // }

  viewProgram(id : String){
    return this.http.get(this.baseUrl + 'programs/'+ id, {
      headers: this.generateHedaer(),
    } );
  }

  addProgram(programObj : any){
    return this.http.post(this.baseUrl +'programs/', programObj, {
      headers: this.generateHedaer(),
    } );
  }

  deleteProgram(id : any){
    return this.http.delete(this.baseUrl+ 'programs/'+ id, {
      headers: this.generateHedaer(),
    } );
  }

  editProgram(id:any, programObj :any){
    return this.http.put(this.baseUrl+ 'programs/' + id, programObj, {
      headers: this.generateHedaer(),
    } );
  }

  getUndergrads(id:any){
    return this.http.get(this.baseUrl + 'registerEvent/'+ id );
  }

  listProgramsbyCat(programCat: any){
    console.log("HIIIII")
    return this.http.get(this.baseUrl +'programs/programType/' + programCat, {
      headers: this.generateHedaer(),
    });
  }
}
