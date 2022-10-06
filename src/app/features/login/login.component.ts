import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.myCustomObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete:  () => console.log('observable finished')
    })
  }
  public loginMethod() {
    this.registerService.loginUser(this.loginForm.value).pipe(
      tap((response) => {
        localStorage.setItem('token', response.accessToken)
        alert('succesfully login')

      }),
      catchError(() => {
        alert('error while login')
        return of({})
      })
    ).subscribe()
  }

}
