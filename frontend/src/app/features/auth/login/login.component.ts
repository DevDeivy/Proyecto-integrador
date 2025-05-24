<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostUserRegisterService } from '../../../services/post-user-register.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
=======
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
>>>>>>> feature/email
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

<<<<<<< HEAD
  errorLogin: boolean = false;

  login = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  });

  
  
  private _servicePostUserLogin = inject(PostUserRegisterService);


  LoginUser():void{
    const {email, password} = this.login.value

    const payload = {
      email: email,
      password: password
    }

    this._servicePostUserLogin.LoginUser(payload).subscribe({
      next: (token: any) => {
        console.log('token ->', token);
      },
      error: (err: any) => {
        console.log('error', err);
        this.errorLogin = true
      }
    });
    
    this.login.get('password')?.valueChanges.subscribe(() => {
      this.errorLogin = false;
    });
  }
}
=======
  authService: AuthenticationService = inject(AuthenticationService);

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  onLoginSubmit(){
    this.authService.loginUser(this.login.value).subscribe({
      next: token => {
        console.log( token );
      },
      error: e => {
        console.log(e);
      }
    })

  }
  
}
>>>>>>> feature/email
