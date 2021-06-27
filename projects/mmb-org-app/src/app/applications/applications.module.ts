import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from '@fuse/shared.module';
import { ApplicationsService } from './applications.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseConfirmDialogModule, FuseMaterialColorPickerModule } from '@fuse/components';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsComponent } from './applications/applications.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { CvCoverLetterComponent } from './ui-components/cv-cover-letter/cv-cover-letter.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [ApplicationsComponent, ApplicationDetailComponent, CvCoverLetterComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,

    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,

    NgxDnDModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseMaterialColorPickerModule,
    SharedModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [ApplicationsService],
  entryComponents: [ApplicationDetailComponent]
})
export class ApplicationsModule { }
