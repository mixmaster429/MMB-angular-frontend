import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

const routes: Routes = [
  { path: ':slug', component: PublicProfileComponent },
  { path: '', component: MyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
