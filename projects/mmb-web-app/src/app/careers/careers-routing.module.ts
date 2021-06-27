import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CareersDetailsLightComponent } from './careers-details-light/careers-details-light.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: ':slug/apply', component: ApplyComponent },
  { path: 'search/:query', component: CareersDetailsLightComponent },
  { path: ':slug', component: CareersDetailsLightComponent },
  { path: '', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
