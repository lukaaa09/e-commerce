import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { IRegister } from 'src/app/core/interfaces/register-interface';
import { passwordValidator } from 'src/app/core/password-validator';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    confirmPassword: new FormControl('', Validators.required)
  },{validators: passwordValidator})

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  navigatelogin() {
    this.router.navigateByUrl('/login').then()
  }
  public registerMethod() {
    this.registerService.registerMethod(this.register.value as any).pipe(
      tap(() => {
        alert('Succesfully Register')
        this.register.reset()
        this.router.navigateByUrl('/login').then()
      }),
      catchError(() => {
        alert('Error While Registering')
        return of({})
      })
    ).subscribe()
  }

}
