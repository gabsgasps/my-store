import { Component, OnInit } from '@angular/core';
import { WishListService } from './wish-list.service/wish-list.service';
import { CartProduct } from '../cart/cart-product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishListSubject$: Observable<CartProduct[]>;
  
  wishList: CartProduct[]; 
  
  constructor(private wishListService: WishListService) { }
  
  ngOnInit() {

    this.wishListSubject$ =  this.wishListService.getWishListObservable();

    this.wishListSubject$.subscribe( wishList => {
      this.wishList = wishList,
      console.log(this.wishList)
    } );
  }

}
