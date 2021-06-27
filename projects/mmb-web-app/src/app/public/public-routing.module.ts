import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { CompaniesComponent } from './companies/companies.component';
import { LandingComponent } from './landing/landing.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApiErrorComponent } from './error-pages/api-error/api-error.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { UserOnboardingComponent } from './user-onboarding/user-onboarding.component';
import { PulseListingComponent } from './pulse/pulse-listing/pulse-listing.component';
import { PulseDetailsComponent } from './pulse/pulse-details/pulse-details.component';


const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'welcome/:uuid', component: UserOnboardingComponent },
  { path: 'pulse/all', component: PulseListingComponent },
  { path: 'pulse/:slug', component: PulseDetailsComponent },
  { path: 'internal-error', component: ApiErrorComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
