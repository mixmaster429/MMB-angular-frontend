import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsSimplifiedRoutingModule } from './applications-simplified-routing.module';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { FuseProgressBarModule } from '@fuse/components';
import { ViewApplicationComponent } from './application-details/helpers/view-application/view-application.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserFeedbacksComponent } from './application-details/helpers/feedbacks/feedbacks.component';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InterestsComponent } from './interests/interests.component';
import { InterestDetailsComponent } from './interest-details/interest-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ApplicationsComponent, ApplicationDetailsComponent, ViewApplicationComponent, UserFeedbacksComponent, InterestsComponent, InterestDetailsComponent],
  imports: [
    CommonModule,
    ApplicationsSimplifiedRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    FuseSharedModule,
    FuseWidgetModule,
    NgxExtendedPdfViewerModule,
    SharedModule,
    FuseProgressBarModule,
    ClipboardModule,
    Ng2SearchPipeModule,
    InfiniteScrollModule,
    CKEditorModule
  ],
  providers: [ClipboardService, {
    provide: MatDialogRef,
    useValue: {}
  },],
  entryComponents: [ViewApplicationComponent]
})
export class ApplicationsSimplifiedModule { }
