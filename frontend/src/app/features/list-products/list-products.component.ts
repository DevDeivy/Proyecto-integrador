import { Component } from '@angular/core';
import { LetterProductComponent } from '../letter-product/letter-product.component';

@Component({
  selector: 'app-list-products',
  imports: [ LetterProductComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

}
