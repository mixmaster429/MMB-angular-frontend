import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InviteOthersComponent } from './invite-others/invite-others.component';
import { CareersComponent } from './careers/careers.component';
import { EventsComponent } from './events/events.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { AfricanOpportunitiesPromoComponent } from './landing/african-opportunities-promo/african-opportunities-promo.component';
// import { AuthService } from './auth.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ApiErrorComponent } from './error-pages/api-error/api-error.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { TermsOfUseTopBarComponent } from './terms-of-use/helpers/terms-of-use-top-bar/terms-of-use-top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserOnboardingComponent } from './user-onboarding/user-onboarding.component';
import { UserOnboardingSetPasswordComponent } from './helpers/user-onboarding-set-password/user-onboarding-set-password.component';
import { UserOnboardingWelcomeUserComponent } from './helpers/user-onboarding-welcome-user/user-onboarding-welcome-user.component';
import { UserOnboardingStepDescribeYourselfComponent } from './helpers/user-onboarding-step-describe-yourself/user-onboarding-step-describe-yourself.component';
import { UserOnboardingStepInterestedInComponent } from './helpers/user-onboarding-step-interested-in/user-onboarding-step-interested-in.component';
import { UserOnboardingStepLocationInfoComponent } from './helpers/user-onboarding-step-location-info/user-onboarding-step-location-info.component';
import { UserOnboardingStepProfessionalProfileComponent } from './helpers/user-onboarding-step-professional-profile/user-onboarding-step-professional-profile.component';
import { UserOnboardingStepProfilePictureComponent } from './helpers/user-onboarding-step-profile-picture/user-onboarding-step-profile-picture.component';
import { UserOnboardingStepSuccessComponent } from './helpers/user-onboarding-step-success/user-onboarding-step-success.component';
import { UserOnboardingStepUserSupportComponent } from './helpers/user-onboarding-step-user-support/user-onboarding-step-user-support.component';
import { UserOnboardingService } from './user-onboarding/user-onboarding.service';
import { UserOnboardingSetProfileWorkflowComponent } from './helpers/user-onboarding-set-profile-workflow/user-onboarding-set-profile-workflow.component';
import { UserOnboardingStepHowCanWeHelpComponent } from './helpers/user-onboarding-step-how-can-we-help/user-onboarding-step-how-can-we-help.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PulseDetailsComponent } from './pulse/pulse-details/pulse-details.component';
import { PulseListingComponent } from './pulse/pulse-listing/pulse-listing.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    PartnersComponent,
    FaqComponent,
    ContactUsComponent,
    InviteOthersComponent,
    CareersComponent,
    EventsComponent,
    InitiativesComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CompaniesComponent,
    LandingComponent,
    AfricanOpportunitiesPromoComponent,
    ResetPasswordComponent,
    NotFoundComponent,
    ApiErrorComponent,
    TermsOfUseComponent,
    TermsOfUseTopBarComponent,
    UserOnboardingWelcomeUserComponent,
    UserOnboardingSetPasswordComponent,
    UserOnboardingSetProfileWorkflowComponent,
    UserOnboardingStepDescribeYourselfComponent,
    UserOnboardingStepHowCanWeHelpComponent,
    UserOnboardingStepUserSupportComponent,
    UserOnboardingStepInterestedInComponent,
    UserOnboardingStepLocationInfoComponent,
    UserOnboardingStepProfessionalProfileComponent,
    UserOnboardingStepProfilePictureComponent,
    UserOnboardingStepSuccessComponent,
    UserOnboardingComponent,
    PulseListingComponent,
    PulseDetailsComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxFileDropModule,
    NgbModule
  ],
  providers: [
    // AuthService
    UserOnboardingService
  ]
})
export class PublicModule { }
