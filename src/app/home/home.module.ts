import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        ProductsModule
    ]
})
export class HomeModule {

}
