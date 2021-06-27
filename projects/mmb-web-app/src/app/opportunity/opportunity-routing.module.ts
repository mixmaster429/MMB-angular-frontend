import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { DetailsComponent } from './details/details.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';

const routes: Routes = [
  { path: 'create', component: CreateOpportunityComponent },
  { path: ':slug', component: DetailsComponent },
  { path: '', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
