import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from './cart-service/cart-service';
import { Observable } from 'rxjs';
import { CartProduct } from './cart-product';


@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CartComponent implements OnInit {
  
  subject$: Observable<CartProduct[]>;

  getTotal;
  total;
  products;

  constructor(
    private cartService: CartService,
    private teste: ChangeDetectorRef) { 

      // this.updateCart();
    }
    
    ngOnInit() {
      
      this.subject$ = this.cartService.getSubjectProduct();
      
      console.log(this.subject$);
      this.subject$
        .subscribe( products => {
          this.products = products,
          console.log(products)
        })
      // this.priceTotal();
      
    }
    
    updateCart() {

    }

    // private priceTotal() {
      
    //   this.getTotal.reduce( (price1, price2) => 
    //       this.total =  price1 + price2.price, 0);
    // }

    remove(target) {
      
      target;
    }
  

    empty() {
      this.cartService.emptyCart();
    }
  
  

}
