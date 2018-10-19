import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CartService } from './cart/cart-service/cart-service';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartProduct } from './cart/cart-product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  

  title = ' Bem  Vindo';
  length$: Observable<CartProduct[]>;
  length;
  
  constructor(
    public dialog: MatDialog,
    private cartService: CartService
  ) {
    
  }
  
  ngOnInit() {
    
    this.length$ =  this.cartService.getSubjectProduct();

    this.length$.subscribe( length => this.length = length);
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(CartComponent,{
      width: '500px',
      height: 'auto',
      data: ' '
    });

  }

  openDialogWishList(): void {
    
    const ref = this.dialog.open(WishListComponent,{
      width: '500px',
      height: 'auto',
      data: ' '
    });

  }

  
}
