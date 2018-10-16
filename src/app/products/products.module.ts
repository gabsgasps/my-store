import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule, MatGridListModule } from "@angular/material";

import { ProductItemComponent } from "./product-item/product-item.component";
import { ShowCaseComponent } from "./show-case/show-case.component";


@NgModule({
    declarations: [
        ProductItemComponent,
        ShowCaseComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatCardModule
    ],
    exports: [
        ProductItemComponent,
        ShowCaseComponent
    ]
})
export class ProductsModule {

}