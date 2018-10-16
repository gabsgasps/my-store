import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule, MatDialogModule, MatButtonModule } from "@angular/material";

import { DialogComponent } from "./dialog.component";

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        DialogComponent
    ],
    exports: [DialogComponent]
})
export class DialogModule {

}