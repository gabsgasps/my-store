import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartComponent } from "./cart.component";
import {  MatDividerModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from "@angular/router";
import { DialogModule } from "../../shared/dialog/dialog.module";


@NgModule({
    declarations: [ CartComponent ],
    imports: [ 
        CommonModule,
        RouterModule,
        MatDividerModule, 
        MatButtonModule,
        MatIconModule,
        DialogModule
    ],
    exports: [ 
        CartComponent
    ]
})
export class CartModule {

}