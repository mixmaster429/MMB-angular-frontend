import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'organizations',
    loadChildren: () => import('./organizations/organizations.module').then(m => m.OrganizationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'requests', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
