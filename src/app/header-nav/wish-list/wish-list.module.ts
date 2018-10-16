import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatDividerModule, MatButtonModule, MatIconModule } from '@angular/material';

import { WishListComponent } from './wish-list.component';
import { DialogModule } from '../../shared/dialog/dialog.module';

@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    DialogModule
  ],
  exports: [WishListComponent]
})
export class WishListModule { }
