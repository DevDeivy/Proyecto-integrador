import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostUserRegisterService } from '../../../services/post-user-register.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
