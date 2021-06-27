import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './public/auth-guard.service';

const routes: Routes = [
  {
    path: 'careers',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'experiences',
    loadChildren: () => import('./initiatives/initiatives.module').then(m => m.InitiativesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then(m => m.ProgramsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'answers',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'opportunity',
    loadChildren: () => import('./opportunity/opportunity.module').then(m => m.OpportunityModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'insight',
    loadChildren: () => import('./insight/insight.module').then(m => m.InsightModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'media',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'organisation',
    loadChildren: () => import('./organisation/organisation.module').then(m => m.OrganisationModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
