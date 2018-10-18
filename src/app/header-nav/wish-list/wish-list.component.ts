import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { WishListService } from './wish-list.service/wish-list.service';
import { CartProduct } from '../cart/cart-product';
import { CartService } from '../cart/cart-service/cart-service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishListSubject$: Observable<CartProduct[]>;
  
  wishList: CartProduct[]; 
  
  constructor(
    private wishListService: WishListService,
    private cartService: CartService,
    private render: Renderer2
  ) { }
  
  ngOnInit() {

    this.wishListSubject$ =  this.wishListService.getWishListObservable();

    this.wishListSubject$.subscribe( wishList => this.wishList = wishList);
  }

  removeFromWishList(name) {
      this.wishListService.removeProductItem(name);
  }

  addAtCart(name: string, price: number) {

      this.cartService.addProduct(name, price);
  }

  removeFromCart(name:string) {
    
    this.cartService.removeProductItem(name);
  }

  
}
