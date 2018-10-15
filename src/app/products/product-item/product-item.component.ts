import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-item';
import { CartService } from '../../cart/cart-service/cart-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  @Input() products: Product[];
  
  constructor(private cartService: CartService) { }

  add(name, price) {

    this.cartService.addProduct(name, price);
    
  }
  ngOnInit() {
  }

}
