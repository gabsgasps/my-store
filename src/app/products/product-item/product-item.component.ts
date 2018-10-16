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

  add(name, price) {

    this.cartService.addProduct(name, price);
  }
  ngOnInit() { }

  openSnackBar(message: string, action: string) {

    this.wishListService.addAtWishList(message, action);

    this.snackBar.open(message, action, {
      duration: 2000,
    });

  }

}