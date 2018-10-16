import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartComponent } from "./cart.component";
import { MatIconModule, MatDividerModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [ CartComponent ],
    imports: [ 
        CommonModule,
        RouterModule,
        MatIconModule,
        MatDividerModule, 
        MatButtonModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    exports: [ 
        CartComponent
    ]
})
export class CartModule {

}