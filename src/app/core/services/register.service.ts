import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public registerUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  public loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.registerUrl}/login/`,user)
  }

  public registerUser(user: any) {
    return this.http.post(`${this.registerUrl}/register/`, user)
  }

}
