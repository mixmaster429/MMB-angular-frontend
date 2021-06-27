import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from './../../../layout/components/content/content.module';
import { FooterModule } from './../../../layout/components/footer/footer.module';
import { NavbarModule } from './../../../layout/components/navbar/navbar.module';
import { QuickPanelModule } from './../../../layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from './../../../layout/components/toolbar/toolbar.module';

import { VerticalLayoutComponent } from './../../../layout/vertical/layout/layout.component';

@NgModule({
    declarations: [
        VerticalLayoutComponent
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayoutComponent
    ]
})
export class VerticalLayoutModule
{
}
