import { NgClass, NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { cardsMock } from '../../data/moks/cards.mock';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  imports: [
    NgFor,
    NgClass,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards: Card[] = cardsMock;  
}