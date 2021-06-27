import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { AllComponent } from './all/all.component';
import { SharedModule } from '../shared/shared.module';
import { CareerService } from './careers.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';
import { CareersDetailsLightComponent } from './careers-details-light/careers-details-light.component';
import { ApplyComponent } from './apply/apply.component';
import { DocsUploadComponent } from './apply/docs-upload/docs-upload.component';
import { PersonalInfoComponent } from './apply/personal-info/personal-info.component';
import { QuestionsComponent } from './apply/questions/questions.component';
import { ConfirmationComponent } from './apply/confirmation/confirmation.component';
import { JobSummaryComponent } from './apply/job-summary/job-summary.component';
import { BtnDisplayToggleComponent } from './apply/btn-display-toggle/btn-display-toggle.component';
import { ApplyCareerService } from './apply/apply.service';
import { PersonalInfoStepService } from './apply/personal-info/personal-info.service';
import { QuestionsStepService } from './apply/questions/questions.service';
import { DocsUploadStepService } from './apply/docs-upload/docs-upload.service';
import { ModalExternalApplyComponent } from './modal-external-apply/modal-external-apply.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApplyCareerComponent } from './helpers/apply-career/apply-career.component';
import { ModalApplyCareerComponent } from './modal-apply-career/modal-apply-career.component';
import { NgbModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CareerSubbarComponent } from './helpers/career-subbar/career-subbar.component';
import { CareerFilterSidebarComponent } from './helpers/career-filter-sidebar/career-filter-sidebar.component';
import { CareerSummaryListingCardInfoComponent } from './helpers/career-summary-listing-card-info/career-summary-listing-card-info.component';
import { CareerSummaryInfoComponent } from './helpers/career-summary-info/career-summary-info.component';
import { CareerDescriptionRolesComponent } from './helpers/career-description-roles/career-description-roles.component';
import { CareerCriteriaComponent } from './helpers/career-criteria/career-criteria.component';
import { CareerBenefitsComponent } from './helpers/career-benefits/career-benefits.component';
import { SimilarCareersComponent } from './helpers/similar-careers/similar-careers.component';
import { SuggestedCareersComponent } from './helpers/suggested-careers/suggested-careers.component';
import { CardListItemPreviewComponent } from './helpers/card-list-item-preview/card-list-item-preview.component';
import { CareerPostedByComponent } from './helpers/career-posted-by/career-posted-by.component';
import { CareerLocationsSectionComponent } from './helpers/career-locations-section/career-locations-section.component';
import { CareerIndustryFunctionsSectionComponent } from './helpers/career-industry-functions-section/career-industry-functions-section.component';
import { CareerTypeSummarySectionComponent } from './helpers/career-type-summary-section/career-type-summary-section.component';
import { CareerSkillsSectionComponent } from './helpers/career-skills-section/career-skills-section.component';
import { CareerDetailsOrgOverviewComponent } from './helpers/career-details-org-overview/career-details-org-overview.component';
import { CareerDetailsOrgJobCardComponent } from './helpers/career-details-org-job-card/career-details-org-job-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CareerApplyOrgDetailsComponent } from './helpers/career-apply-org-details/career-apply-org-details.component';
import { CareerApplySelectBoxComponent } from './helpers/career-apply-select-box/career-apply-select-box.component';
import { CareerApplyQuestionsComponent } from './helpers/career-apply-questions/career-apply-questions.component';
import { CareerApplyLocationComponent } from './helpers/career-apply-location/career-apply-location.component';
import { CareerApplyCompensationComponent } from './helpers/career-apply-compensation/career-apply-compensation.component';
import { CareerApplyProfessionalInfoComponent } from './helpers/career-apply-professional-info/career-apply-professional-info.component';
import { CareerApplySectionTitleComponent } from './helpers/career-apply-section-title/career-apply-section-title.component';
import { CareerApplyCancelModalComponent } from './helpers/career-apply-cancel-modal/career-apply-cancel-modal.component';

/**
 * Careers module
 */
@NgModule({
  declarations: [AllComponent, CareersDetailsLightComponent, ApplyComponent,
    DocsUploadComponent, PersonalInfoComponent, QuestionsComponent, ConfirmationComponent, JobSummaryComponent,
    BtnDisplayToggleComponent, ModalExternalApplyComponent, ApplyCareerComponent, ModalApplyCareerComponent,
    CareerSubbarComponent, CareerFilterSidebarComponent,
    CareerSummaryListingCardInfoComponent, CareerSummaryInfoComponent,
    CareerDescriptionRolesComponent, CareerCriteriaComponent, CareerBenefitsComponent, SimilarCareersComponent,
    SuggestedCareersComponent, CardListItemPreviewComponent, CareerPostedByComponent, CareerLocationsSectionComponent,
    CareerIndustryFunctionsSectionComponent, CareerTypeSummarySectionComponent, CareerSkillsSectionComponent, CareerDetailsOrgOverviewComponent, CareerDetailsOrgJobCardComponent, CareerApplyOrgDetailsComponent, CareerApplySelectBoxComponent, CareerApplyQuestionsComponent, CareerApplyLocationComponent, CareerApplyCompensationComponent, CareerApplyProfessionalInfoComponent, CareerApplySectionTitleComponent, CareerApplyCancelModalComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CareersRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TimeagoModule.forRoot(),
    FlexLayoutModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgbPopoverModule,
    NgbTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [CareerService, ApplyCareerService, PersonalInfoStepService, QuestionsStepService, DocsUploadStepService],
  entryComponents: [ModalExternalApplyComponent, ModalApplyCareerComponent, CareerApplyCancelModalComponent]
})
export class CareersModule { }
