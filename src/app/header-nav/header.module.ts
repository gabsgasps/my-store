import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { CartModule } from "./cart/cart.module";
import { MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatBadgeModule } from "@angular/material";
import { WishListModule } from "./wish-list/wish-list.module";


@NgModule({
    declarations: [

        HeaderComponent
    ],
    imports: [ 
        CommonModule,
        CartModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatBadgeModule,
        WishListModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}