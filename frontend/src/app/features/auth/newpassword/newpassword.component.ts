import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './newpassword.component.html',
  styleUrl: './newpassword.component.css'
})
export class NewpasswordComponent {

  actualizar = new FormGroup({
    contraseña: new FormControl('', Validators.required),
    confirmar: new FormControl('', Validators.required)
  });


  confirmar(){
    return this.actualizar.get('contraseña')?.value !== this.actualizar.get('confirmar')?.value
  }
}
