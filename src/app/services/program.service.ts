import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }


  listPrograms(){
    return this.http.get(this.baseUrl + 'programs/');
  }

  viewProgram(id : String){
    return this.http.get(this.baseUrl + 'programs/'+ id );
  }

  addProgram(programObj : any){
    return this.http.post(this.baseUrl +'programs/', programObj );
  }

  deleteProgram(id : any){
    return this.http.delete(this.baseUrl+ 'programs/'+ id );
  }

  editProgram(id:any, programObj :any){
    return this.http.put(this.baseUrl+ 'programs/' + id, programObj );
  }
}
