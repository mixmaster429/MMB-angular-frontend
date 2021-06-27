import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: ':id', component: DetailsComponent },
  { path: '', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitiesRoutingModule { }
