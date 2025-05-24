import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { AuthComponent } from './features/auth/auth.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthComponent, HeaderComponent],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> feature/email
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-int-2';
}
