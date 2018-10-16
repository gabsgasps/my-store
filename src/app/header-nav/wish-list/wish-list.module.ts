import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatDividerModule } from '@angular/material';

import { WishListComponent } from './wish-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [WishListComponent],
  exports: [WishListComponent]
})
export class WishListModule { }
