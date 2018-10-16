import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { CartModule } from "./cart/cart.module";
import { MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatBadgeModule } from "@angular/material";
import { WishListComponent } from './wish-list/wish-list.component';


@NgModule({
    declarations: [

        HeaderComponent,

        WishListComponent
    ],
    imports: [ 
        CommonModule,
        CartModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatBadgeModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}