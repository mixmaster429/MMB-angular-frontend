import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { CustomizeComponent } from './customize/customize.component';
import { NgbTabsetModule, NgbTooltip, NgbTooltipModule, NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomizePageComponent } from './helpers/customize-page/customize-page.component';
import { CustomizeJobsComponent } from './helpers/customize-jobs/customize-jobs.component';
import { CustomizeEventsComponent } from './helpers/customize-events/customize-events.component';
import { CustomizeInitiativesComponent } from './helpers/customize-initiatives/customize-initiatives.component';
import { CompanyAnalyticsComponent } from './helpers/company-analytics/company-analytics.component';
import { ModalEditCompanyInfoComponent } from './helpers/modal-edit-company-info/modal-edit-company-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import { NewJobBasicComponent } from './helpers/new-job-basic/new-job-basic.component';
import { NewJobAdvancedComponent } from './helpers/new-job-advanced/new-job-advanced.component';
import { OrgViewTopBannerComponent } from './helpers/org-view-top-banner/org-view-top-banner.component';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { CreateNewInitiativeComponent } from './create-new-initiative/create-new-initiative.component';
import { NewEventBasicComponent } from './helpers/new-event-basic/new-event-basic.component';
import { NewEventAdvancedComponent } from './helpers/new-event-advanced/new-event-advanced.component';
import { NewInitiativeAdvancedComponent } from './helpers/new-initiative-advanced/new-initiative-advanced.component';
import { NewInitiativeBasicComponent } from './helpers/new-initiative-basic/new-initiative-basic.component';
import { EventListingIndustriesInputComponent } from './helpers/event-listing-industries-input/event-listing-industries-input.component';
import { EventTicketPriceComponent } from './helpers/event-ticket-price/event-ticket-price.component';
import { TicketPriceItemComponent } from './helpers/event-ticket-price/ticket-price-item/ticket-price-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrganisationSummaryPanelComponent } from './helpers/organisation-summary-panel/organisation-summary-panel.component';
import { OrganisationMetaInfoPanelComponent } from './helpers/organisation-meta-info-panel/organisation-meta-info-panel.component';
import { OrganisationAboutInfoPanelComponent } from './helpers/organisation-about-info-panel/organisation-about-info-panel.component';
import { OrganisationCultureInfoPanelComponent } from './helpers/organisation-culture-info-panel/organisation-culture-info-panel.component';
import { OrganisationItemSelectorPanelComponent } from './helpers/organisation-item-selector-panel/organisation-item-selector-panel.component';
import { OrganisationCareersComponent } from './helpers/organisation-careers/organisation-careers.component';
import { OrganisationEventsComponent } from './helpers/organisation-events/organisation-events.component';
import { OrganisationExperiencesComponent } from './helpers/organisation-experiences/organisation-experiences.component';

@NgModule({
  declarations: [PublicProfileComponent, CustomizeComponent, CustomizePageComponent, CustomizeJobsComponent, CustomizeEventsComponent, CustomizeInitiativesComponent, CompanyAnalyticsComponent, ModalEditCompanyInfoComponent, CreateNewJobComponent, NewJobBasicComponent, NewJobAdvancedComponent, OrgViewTopBannerComponent, CreateNewEventComponent, CreateNewInitiativeComponent, NewEventBasicComponent, NewEventAdvancedComponent, NewInitiativeAdvancedComponent, NewInitiativeBasicComponent, EventListingIndustriesInputComponent, EventTicketPriceComponent, TicketPriceItemComponent, OrganisationSummaryPanelComponent, OrganisationMetaInfoPanelComponent, OrganisationAboutInfoPanelComponent, OrganisationCultureInfoPanelComponent, OrganisationItemSelectorPanelComponent, OrganisationCareersComponent, OrganisationEventsComponent, OrganisationExperiencesComponent],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    FlexLayoutModule,
    SharedModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgbTypeaheadModule,
    InfiniteScrollModule,
    NgbTooltipModule
  ],
  entryComponents: [ModalEditCompanyInfoComponent]
})
export class OrganisationModule { }
