import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fgcodepassword',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './fgcodepassword.component.html',
  styleUrl: './fgcodepassword.component.css'
})
export class FgcodepasswordComponent {

  code = new FormControl('',Validators.required)

}
