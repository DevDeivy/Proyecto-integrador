import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authService: AuthenticationService = inject(AuthenticationService);

  register = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  registerUser() {

    const { email, password, confirmPassword } = this.register.value;

    if (password === confirmPassword) {

      const userData = {
        email,
        password,
      }

      this.authService.registerUser(userData).subscribe({

        next: res => {
          console.log(res);
        },
        error: e => {
          console.log(e);
        }

      });

    };

  };

}