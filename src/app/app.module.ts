import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule,
  MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, 
  MatBadgeModule, MatDialogModule, 
  MatTableModule, MatDividerModule, 
  MatToolbarModule } from '@angular/material';


import { AppRoutingModule } from './app.routing.module.';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatDividerModule,
    HomeModule,
    ProductsModule,
    CartModule,
    HeaderModule
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
