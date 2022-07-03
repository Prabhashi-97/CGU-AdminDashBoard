import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/admin/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userValue: any): Observable<any> {
    var email: string[] = userValue.email;
    var adminPassword: string[] = userValue.adminPassword;
    console.log(email);
    console.log(adminPassword);
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        adminPassword,
      },
      httpOptions
    );
  }
}
