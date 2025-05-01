import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardComponent } from '../../shared/card/card.component';

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
