import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { AllComponent } from './all/all.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EventsService } from './events.service';
import { EventsDetailsLightComponent } from './events-details-light/events-details-light.component';
import { TimeagoModule } from 'ngx-timeago';
import { ModalRegisterEventComponent } from './modal-register-event/modal-register-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyEventComponent } from './helpers/apply-event/apply-event.component';
import { NgbModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { EventSubbarComponent } from './helpers/event-subbar/event-subbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventSummaryInfoComponent } from './helpers/event-summary-info/event-summary-info.component';
import { EventDescriptionComponent } from './helpers/event-description/event-description.component';
import { EventExtraDetailsComponent } from './helpers/event-extra-details/event-extra-details.component';
import { EventPostedByComponent } from './helpers/event-posted-by/event-posted-by.component';
import { SimilarEventsComponent } from './helpers/similar-events/similar-events.component';

@NgModule({
  declarations: [AllComponent, EventsDetailsLightComponent, ModalRegisterEventComponent, ApplyEventComponent, 
    EventSubbarComponent, EventSummaryInfoComponent, EventDescriptionComponent, EventExtraDetailsComponent, 
    EventPostedByComponent, SimilarEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TimeagoModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    NgbModule,
    NgbTooltipModule,
    FlexLayoutModule
  ],
  providers: [EventsService],
  entryComponents: [ModalRegisterEventComponent]
})
export class EventsModule { }
