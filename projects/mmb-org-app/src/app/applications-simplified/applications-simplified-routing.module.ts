import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationsComponent } from './applications/applications.component';
import { InterestDetailsComponent } from './interest-details/interest-details.component';
import { InterestsComponent } from './interests/interests.component';


const routes: Routes = [
  { path: '', redirectTo: 'applications', pathMatch: 'full' },
  { path: 'applications', component: ApplicationsComponent },
  { path: ':careerSlug/applications/:applicationUuid', component: ApplicationDetailsComponent },
  { path: ':careerSlug/applications', component: ApplicationDetailsComponent },

  { path: 'interests', component: InterestsComponent },
  { path: ':careerSlug/interests/:applicationUuid', component: InterestDetailsComponent },
  { path: ':careerSlug/interests', component: InterestDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsSimplifiedRoutingModule { }
