import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'careers',
    loadChildren: () => import('./applications-simplified/applications-simplified.module').then(m => m.ApplicationsSimplifiedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'opportunities',
    loadChildren: () => import('./opportunities/opportunities.module').then(m => m.OpportunitiesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'organization',
    loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
