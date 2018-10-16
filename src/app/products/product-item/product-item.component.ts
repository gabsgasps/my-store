import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-item';
import { CartService } from '../../header-nav/cart/cart-service/cart-service';
import { MatSnackBar } from '@angular/material';
import { WishListComponent } from '../../header-nav/wish-list/wish-list.component';
import { WishListService } from '../../header-nav/wish-list/wish-list.service/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  
  @Input() products: Product[];
  
  constructor(
    private cartService: CartService,
    public snackBar: MatSnackBar,
    private wishListService: WishListService
  ) { }

  add(name: string, price: number) {

    this.cartService.addProduct(name, price);
  }

  ngOnInit() { }

  openSnackBar(name: string, price: string) {

    this.wishListService.addAtWishList(name, Number(price));

    this.snackBar.open(name ,'Added in Wish List', {
      duration: 2000,
    });

  }

}