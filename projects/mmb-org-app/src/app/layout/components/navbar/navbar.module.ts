import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { NavbarComponent } from './../../../layout/components/navbar/navbar.component';
import { NavbarVerticalStyleModule } from './../../../layout/components/navbar/vertical/style/style.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        FuseSharedModule,
        NavbarVerticalStyleModule,
        RouterModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
