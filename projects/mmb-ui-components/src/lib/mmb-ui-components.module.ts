import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NotificationComponent } from './notification/notification.component';
import { MessagingComponent } from './messaging/messaging.component';
import { AlertComponent } from './alert/alert.component';
import { ChatComponent } from './chat/chat.component';
import { LoaderComponent } from './loader/loader.component';
import { loaderReducer } from './loader/loader.reducer';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { InlineLoaderComponent } from './inline-loader/inline-loader.component';
import { BadgeSeniorityLevelComponent } from './badge-seniority-level/badge-seniority-level.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import { StepComponent } from './stepper/step/step.component';
import { StepContentComponent } from './stepper/step-content/step-content.component';

@NgModule({
  declarations: [
    NotificationComponent, 
    MessagingComponent, 
    AlertComponent, 
    ChatComponent, 
    LoaderComponent, 
    CardComponent, 
    InlineLoaderComponent, 
    BadgeSeniorityLevelComponent,
    StepComponent, 
    StepContentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    TimeagoModule.forRoot(),
    StoreModule.forFeature('loader', loaderReducer)
  ],
  exports: [
    NotificationComponent, 
    MessagingComponent, 
    AlertComponent, 
    ChatComponent, 
    LoaderComponent,
    CardComponent,
    InlineLoaderComponent,
    BadgeSeniorityLevelComponent,
    StepComponent, 
    StepContentComponent
  ]
})
export class MmbUiComponentsModule { }
