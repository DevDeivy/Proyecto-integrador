import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive } from '@angular/router';
=======
import { HeaderComponent } from '../../shared/header/header.component';
import { CardComponent } from '../../shared/card/card.component';
>>>>>>> feature/email

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
