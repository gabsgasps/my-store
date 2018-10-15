import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { CartModule } from "../cart/cart.module";


@NgModule({
    declarations: [

        HeaderComponent
    ],
    imports: [ 
        CommonModule,
        CartModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}