import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: 'management', component: ManagementComponent },
  { path: ':slug', component: RequestDetailsComponent },
  { path: '', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
