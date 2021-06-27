import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { CustomizeComponent } from './customize/customize.component';
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { CreateNewInitiativeComponent } from './create-new-initiative/create-new-initiative.component';


const routes: Routes = [
  {
    path: 'customize/:slug/create-job',
    component: CreateNewJobComponent
  },
  {
    path: 'customize/:slug/create-event',
    component: CreateNewEventComponent
  },
  {
    path: 'customize/:slug/create-initiative',
    component: CreateNewInitiativeComponent
  },
  {
    // ToDo: Router guard to be added
    path: 'customize/:slug',
    component: CustomizeComponent
  },
  {
    path: 'profile/:slug',
    component: PublicProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
