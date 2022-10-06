import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  public registerMethod() {
    this.registerService.registerUser(this.registerForm.value).pipe(
      tap(() => {
        alert('register succesfully')
        this.registerForm.reset()
      }),
      catchError(() => {
        alert('error while registering')
        return of({})
      })
    ).subscribe()
  }

}
