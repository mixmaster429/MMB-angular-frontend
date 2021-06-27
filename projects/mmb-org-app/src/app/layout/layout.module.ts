import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerticalLayoutModule } from './vertical/layout/layout.module';

@NgModule({
    imports: [
        VerticalLayoutModule,
        RouterModule
    ],
    exports: [
        VerticalLayoutModule
    ]
})
export class LayoutModule
{
}
