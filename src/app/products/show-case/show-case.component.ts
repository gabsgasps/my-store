import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-item';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
