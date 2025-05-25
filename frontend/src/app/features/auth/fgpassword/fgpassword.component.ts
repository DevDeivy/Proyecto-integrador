import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fgpassword',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './fgpassword.component.html',
  styleUrl: './fgpassword.component.css'
})
export class FgpasswordComponent {

  siguiente = new FormControl('', [Validators.required, Validators.email]);

}
