import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LetterProductComponent } from '../letter-product/letter-product.component';

@Component({
  selector: 'app-list-products',
  imports: [HeaderComponent, LetterProductComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

}
