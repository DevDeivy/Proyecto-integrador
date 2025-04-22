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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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