import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material';
import { CartService } from '../cart/cart-service/cart-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = ' Bem  Vindo';
  lengthOfProducts: number;

  ngOnInit() {
  }

  
  constructor(
    public dialog: MatDialog,
    private cartService: CartService
  ) {

  }

  openDialog(): void {
    this.cartService.getSubjectProduct();
    const dialogRef = this.dialog.open(CartComponent,{
      width: '500px',
      height: 'auto',
      data: ' '
    });

    
    
  }
}
