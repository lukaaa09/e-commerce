import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from '../interfaces/login-interface';
import { IUserPayload } from '../interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient, private router: Router) { }

  public registerMethod(user: IUserPayload): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.baseUrl}/register`, user)
  }
  public loginMethod(user: IUserPayload): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.baseUrl}/login`, user)
  }
  public logOut() {
    localStorage.clear()
    this.router.navigateByUrl('/login').then()    
  }
  public userId() {
   return localStorage.getItem('id')
  }

}
