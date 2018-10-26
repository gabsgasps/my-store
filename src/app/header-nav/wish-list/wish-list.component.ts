import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
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
  
  status = true;

  @ViewChild('sBtn') sBtn: ElementRef<HTMLButtonElement>;

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

  
  action(name:string, price:number, target:string) {

    target = target.trim();
    
    if(target === 'Add at Cart')
      this.cartService.addProduct(name, price);
    

    if(target === 'Remove from Cart'){
      this.cartService.removeProductItem(name);
      this.status = false
    }

  }

  
}
