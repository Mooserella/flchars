import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatToolbarModule,
        MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatToolbarModule, MatSelectModule],
    exports:[MatButtonModule, MatCheckboxModule, MatTabsModule, MatToolbarModule, MatSelectModule]
})
export class MaterialModule {}