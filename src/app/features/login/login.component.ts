import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
import { IRegister } from 'src/app/core/interfaces/register-interface';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  behaviourSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  subject: Subject<any> = new Subject()
  private myCustomObservable = new Observable((subscriber) => {
    subscriber.next('first value')
    setTimeout(() => {
      subscriber.next('second value')
    }, 2000)
    setTimeout(() => {
      subscriber.next('third value')
      return subscriber.complete()
    }, 3000)
  })
  public loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)])
  })

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  
  }
  public loginMethod() {
    this.registerService.loginMethod(this.loginForm.value as any).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.accessToken)
        alert('succesfully login')
        this.router.navigateByUrl('/').then()
      }),
      catchError(() => {
        alert('Error while login')
        return of({})
      })
    ).subscribe()
  }

}
