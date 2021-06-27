import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';


@NgModule({
  declarations: [DashboardComponent, CompanyProfileComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
