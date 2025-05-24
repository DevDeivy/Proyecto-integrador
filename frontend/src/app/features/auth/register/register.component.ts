<<<<<<< HEAD
import { Component, inject, Inject } from '@angular/core';
import { PostUserRegisterService } from '../../../services/post-user-register.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
=======
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
>>>>>>> feature/email
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

<<<<<<< HEAD
  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  });


  private _servicePostUserRegister = inject(PostUserRegisterService);

  RegisterUser(): void {

    const { email, password, confirmPassword } = this.register.value;
    
    const payload = {
      email: email,
      password: password
    };

    this._servicePostUserRegister.RegisterUser(payload).subscribe(
      (data: any) => {
        console.log('Usuario registrado:', data);
      },
      (err: any) => {
        console.error('Error en el registro:', err);
      }
    );
  }
}
=======
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
>>>>>>> feature/email
