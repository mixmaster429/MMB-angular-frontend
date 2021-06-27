import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'management',
    component: AllComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  },
  {
    path: 'advanced-search',
    component: AdvancedSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
