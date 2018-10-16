import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material';
import { CartService } from '../cart/cart-service/cart-service';
import { Observable } from 'rxjs';

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
    this.cartService.getSubjectProduct();
    const dialogRef = this.dialog.open(CartComponent,{
      width: '500px',
      height: 'auto',
      data: ' '
    });

    
    
  }
}
