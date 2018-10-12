import { Component, OnInit } from '@angular/core';

export interface ProductsCart {
  name: string
  value: number;
  total: number;

}
const PRODUCTS: ProductsCart[] = [  
  {name: 'asd', value: 12.70, total: 1.007},
  {name: 'asd', value: 12.70, total: 1.007},
  {name: 'asd', value: 12.70, total: 1.007},
  {name: 'asd', value: 12.70, total: 1.007},
  {name: 'asd', value: 12.70, total: 1.007},
  {name: 'asd', value: 12.70, total: 1.007},
];
@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  displayedColumns: string [] = [ 'name' , 'value' , 'total'];
  dataSource = PRODUCTS;

  constructor() { 

  }

  ngOnInit() {
  }

}
