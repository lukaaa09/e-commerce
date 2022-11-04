import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRegister } from '../interfaces/register-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient, private router: Router) { }

  public registerMethod(user: IRegister){
    return this.http.post(`${this.baseUrl}/register`, user)
  }
  public loginMethod(user: IRegister) {
    return this.http.post(`${this.baseUrl}/login`, user)
  }
  public logOut() {
    localStorage.clear()
    this.router.navigateByUrl('/').then()    
  }

}
