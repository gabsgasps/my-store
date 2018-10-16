import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule, MatGridListModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from "@angular/material";

import { ProductItemComponent } from "./product-item/product-item.component";
import { ShowCaseComponent } from "./show-case/show-case.component";
import {AddedOnClickModule} from './product-item/directive-added/added-on-click.module';

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
        MatCardModule,
        AddedOnClickModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule
    ],
    exports: [
        ProductItemComponent,
        ShowCaseComponent
    ]
})
export class ProductsModule {

}