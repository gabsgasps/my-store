import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./product-item/product-item.component";
import { CommonModule } from "@angular/common";
import { ShowCaseComponent } from "./show-case/show-case.component";
import { MatCardModule, MatButtonModule, MatGridListModule } from "@angular/material";


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