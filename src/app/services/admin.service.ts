import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  baseUrl :string='http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listAdmin(){
    return this.http.get(this.baseUrl + 'admins/');
  }

  addAdmin(adminObj : any){
    return this.http.post(this.baseUrl +'admins/', adminObj );
  }

  // deleteAdmin(id : any){
  //   return this.http.delete(this.baseUrl+ 'programs/'+ id );
  // }

  // editAdmin(id:any, programObj :any){
  //   return this.http.put(this.baseUrl+ 'programs/' + id, programObj );
  // }

}
