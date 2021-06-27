import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { InitiativesDetailsLightComponent } from './initiatives-details-light/initiatives-details-light.component';

const routes: Routes = [
  { path: 'search/:query', component: InitiativesDetailsLightComponent },
  { path: ':slug', component: InitiativesDetailsLightComponent },
  { path: '', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiativesRoutingModule { }
