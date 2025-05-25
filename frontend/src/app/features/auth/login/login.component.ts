import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup,  FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule, FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public errorLogin: boolean = false;

  authService: AuthenticationService = inject(AuthenticationService);

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
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