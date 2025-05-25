import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
