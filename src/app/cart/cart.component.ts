import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart-service/cart-service';
import { Observable } from 'rxjs';
import { CartProduct } from './cart-product';


@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  @Input() checked;
  subject$: Observable<CartProduct[]>;

  getTotal;
  products: CartProduct[];

  constructor( private cartService: CartService ) { }
    
    ngOnInit() {
      
      this.subject$ = this.cartService.getSubjectProduct();
      
      this.subject$
        .subscribe( products => this.products = products);

      if(this.cartService.hasProducts())
        this.getTotal = (this.products.reduce((price1, price2) => 
          price1 + price2.price, 0)).toFixed(2);
    }
    
    private priceTotal() {
      
      this.products.reduce( (price1, price2) => 
          this.getTotal =  price1 + price2.price, 0);
    }

    remove(target) { 

      this.cartService.removeProductItem(target);
    }
  
    empty() {
      this.cartService.emptyCart();
    }
  
  

}
