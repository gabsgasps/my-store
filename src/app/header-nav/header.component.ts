import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CartService } from './cart/cart-service/cart-service';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = ' Bem  Vindo';
  length: number;

  ngOnInit() {}
  
  constructor(
    public dialog: MatDialog,
    private cartService: CartService
  ) {
    this.length = this.cartService.lengthOfProducts();
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
