import { Component, Inject } from '@angular/core';
import { PostUserRegisterService } from '../../../services/post-user-register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private _servicePostUserRegister: PostUserRegisterService) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    
    const payload = {
      email: this.email,
      password: this.password
    };

    this._servicePostUserRegister.post(payload).subscribe(
      (data: any) => {
        console.log('Usuario registrado:', data);
      },
      (err: any) => {
        console.error('Error en el registro:', err);
      }
    );
  }
}
