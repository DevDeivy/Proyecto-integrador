import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authService: AuthenticationService = inject(AuthenticationService);


register = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
  confirmPassword: new FormControl('', [Validators.required]),
  terminos: new FormControl('', Validators.requiredTrue)
});

  confirmPass(){
    return this.register.get('password')?.value !== this.register.get('confirmPassword')?.value;
  }


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