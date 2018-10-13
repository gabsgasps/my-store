import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from "./home/home-page/home-page.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'carrinho',
        component: CartComponent
    }
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }