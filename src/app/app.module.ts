import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatBadgeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


import { HomeModule } from './home/home.module';
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app.routing.module.';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    CartComponent    
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
    ProductsModule
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
