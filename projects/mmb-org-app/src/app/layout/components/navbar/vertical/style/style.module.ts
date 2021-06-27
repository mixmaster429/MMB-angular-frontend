import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { FuseNavigationModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { NavbarVerticalStyleComponent } from './../../../../../layout/components/navbar/vertical/style/style.component';

@NgModule({
    declarations: [
        NavbarVerticalStyleComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseNavigationModule,
        RouterModule,
        MatButtonModule
    ],
    exports     : [
        NavbarVerticalStyleComponent
    ]
})
export class NavbarVerticalStyleModule
{
}
