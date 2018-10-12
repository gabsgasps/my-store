import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = ' Bem  Vindo';

  ngOnInit() {
  }

  dialogResult = '';
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CartComponent,{
      width: '500px',
      height: 'auto',
      data: ' '
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.dialogResult = result;
    //   console.log(this.dialogResult);
    // });
  }
}
