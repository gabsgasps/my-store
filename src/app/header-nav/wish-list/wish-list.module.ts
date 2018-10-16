import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatDividerModule, MatButtonModule, MatIconModule } from '@angular/material';

import { WishListComponent } from './wish-list.component';
import { DialogModule } from '../../shared/dialog/dialog.module';
import { AddedOnClickModule } from '../../shared/directive-added/added-on-click.module';

@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    AddedOnClickModule
  ],
  exports: [WishListComponent]
})
export class WishListModule { }
