import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { EventsDetailsLightComponent } from './events-details-light/events-details-light.component';

const routes: Routes = [
  { path: 'search/:query', component: EventsDetailsLightComponent },
  { path: ':slug', component: EventsDetailsLightComponent },
  { path: '', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
