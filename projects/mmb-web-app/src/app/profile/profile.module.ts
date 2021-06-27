import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserSummaryProfileInfoComponent } from './ui-components/user-introduction-info/user-introduction-info.component';
import { UserAboutInfoComponent } from './ui-components/user-summary-info/user-summary-info.component';
import { UserDashboardInfoComponent } from './ui-components/user-dashboard-info/user-dashboard-info.component';
import { UserExperienceInfoComponent } from './ui-components/user-experience-info/user-experience-info.component';
import { UserEducationInfoComponent } from './ui-components/user-education-info/user-education-info.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryEditModalComponent } from './ui-components/edit-summary-modal/edit-summary-modal.component';
import { EditProfileInfoModalComponent } from './ui-components/edit-profile-info-modal/edit-profile-info-modal.component';
import { EditProfileContactModalComponent } from './ui-components/edit-profile-contact-modal/edit-profile-contact-modal.component';
import { AddExperienceModalComponent } from './ui-components/add-experience-modal/add-experience-modal.component';
import { AddEducationModalComponent } from './ui-components/add-education-modal/add-education-modal.component';
import { UserSkillsComponent } from './ui-components/user-skills-languages-info/user-skills-info.component';
import { AddSkillModalComponent } from './ui-components/add-skill-modal/add-skill-modal.component';
import { AddLanguageModalComponent } from './ui-components/add-language-modal/add-language-modal.component';
import { DocsUploadComponent } from './docs-upload/docs-upload.component';
import { ConfirmRemoveModalComponent } from './ui-components/confirm-remove-modal/confirm-remove-modal.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    UserSummaryProfileInfoComponent,
    UserAboutInfoComponent,
    UserDashboardInfoComponent,
    UserExperienceInfoComponent,
    UserEducationInfoComponent,
    SummaryEditModalComponent,
    EditProfileInfoModalComponent,
    EditProfileContactModalComponent,
    AddExperienceModalComponent,
    AddEducationModalComponent,
    UserSkillsComponent,
    AddSkillModalComponent,
    AddLanguageModalComponent,
    DocsUploadComponent,
    ConfirmRemoveModalComponent,
    PublicProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    UserSummaryProfileInfoComponent,
    UserAboutInfoComponent,
    UserDashboardInfoComponent,
    UserEducationInfoComponent,
    UserExperienceInfoComponent,
    UserSkillsComponent
  ],
  entryComponents: [
    SummaryEditModalComponent,
    SummaryEditModalComponent,
    EditProfileInfoModalComponent,
    EditProfileContactModalComponent,
    AddExperienceModalComponent,
    AddEducationModalComponent,
    AddSkillModalComponent,
    AddLanguageModalComponent,
    ConfirmRemoveModalComponent
  ],

})
export class ProfileModule { }
