import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativesRoutingModule } from './initiatives-routing.module';
import { AllComponent } from './all/all.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalConfirmApplyComponent } from './modal-confirm-apply/modal-confirm-apply.component';
import { InitiativesDetailsLightComponent } from './initiatives-details-light/initiatives-details-light.component';
import { TimeagoModule } from 'ngx-timeago';
import { ApplyInitiativeComponent } from './helpers/apply-initiative/apply-initiative.component';
import { ModalExternalApplyComponent } from './modal-external-apply/modal-external-apply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceSubbarComponent } from './helpers/experience-subbar/experience-subbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExperienceSummaryInfoComponent } from './helpers/experience-summary-info/experience-summary-info.component';
import { ExperienceDescriptionRolesComponent } from './helpers/experience-description-roles/experience-description-roles.component';
import { ExperienceCriteriaComponent } from './helpers/experience-criteria/experience-criteria.component';
import { ExperienceBenefitsComponent } from './helpers/experience-benefits/experience-benefits.component';
import { ExperiencePostedByComponent } from './helpers/experience-posted-by/experience-posted-by.component';
import { ExperienceTypeSummarySectionComponent } from './helpers/experience-type-summary-section/experience-type-summary-section.component';
import { ExperienceLocationsSectionComponent } from './helpers/experience-locations-section/experience-locations-section.component';
import { ExperienceIndustryFunctionsSectionComponent } from './helpers/experience-industry-functions-section/experience-industry-functions-section.component';
import { ExperienceSkillsSectionComponent } from './helpers/experience-skills-section/experience-skills-section.component';
import { ExperienceDetailsOrgOverviewComponent } from './helpers/experience-details-org-overview/experience-details-org-overview.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExperienceDetailsOrgExperienceCardComponent } from './helpers/experience-details-org-experience-card/experience-details-org-experience-card.component';
import { SimilarExperiencesComponent } from './helpers/similar-experiences/similar-experiences.component';
import { SuggestedExperiencesComponent } from './helpers/suggested-experiences/suggested-experiences.component';

@NgModule({
  declarations: [AllComponent, ModalConfirmApplyComponent, InitiativesDetailsLightComponent, ApplyInitiativeComponent, 
    ModalExternalApplyComponent, ExperienceSubbarComponent, 
    ExperienceSummaryInfoComponent, ExperienceDescriptionRolesComponent, ExperienceCriteriaComponent, 
    ExperienceBenefitsComponent, ExperiencePostedByComponent, ExperienceTypeSummarySectionComponent, 
    ExperienceLocationsSectionComponent, ExperienceIndustryFunctionsSectionComponent, ExperienceSkillsSectionComponent, 
    ExperienceDetailsOrgOverviewComponent, ExperienceDetailsOrgExperienceCardComponent, SimilarExperiencesComponent, 
    SuggestedExperiencesComponent],
  imports: [
    CommonModule,
    InitiativesRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TimeagoModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbPopoverModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents:[ModalConfirmApplyComponent, ModalExternalApplyComponent]
})
export class InitiativesModule { }
