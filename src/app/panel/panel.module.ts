import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
    declarations: [
        PanelComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        PanelComponent
    ]
})
export class PanelModule {

}
