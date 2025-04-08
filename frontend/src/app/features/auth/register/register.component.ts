import { Component, inject, Inject } from '@angular/core';
import { PostUserRegisterService } from '../../../services/post-user-register.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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
