import { Injectable } from '@angular/core';
import { IloggedUser } from '../interfaces/logged-user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: IloggedUser

  constructor() { }
  
  loadUser() {
    this.user = JSON.parse(localStorage.getItem('user')!)
  }
}
