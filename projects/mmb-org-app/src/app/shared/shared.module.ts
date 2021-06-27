import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { MatCardModule } from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserApplicationTileComponent } from './user-application-tile/user-application-tile.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { UserStatusUpdateComponent } from './user-status-update/user-status-update.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TimeAgoPipe } from 'time-ago-pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTooltipModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { ToastrModule } from 'ngx-toastr';
import { BarRatingModule } from "ngx-bar-rating";
import { EmployeeRatingControlComponent } from './employee-rating-control/employee-rating-control.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    UserSummaryComponent,
    UserApplicationTileComponent,
    QuestionAnswerComponent,
    EmployeeInfoComponent,
    UserStatusUpdateComponent,
    FeedbacksComponent,
    TimeAgoPipe,
    EmployeeRatingControlComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    FuseSharedModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    ToastrModule.forRoot(),
    BarRatingModule,
    MatTableModule
  ],
  exports: [
    UserSummaryComponent,
    UserApplicationTileComponent,
    QuestionAnswerComponent,
    EmployeeInfoComponent,
    UserStatusUpdateComponent,
    FeedbacksComponent,
    TimeAgoPipe,
    EmployeeRatingControlComponent,
    SortByPipe
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule { }
