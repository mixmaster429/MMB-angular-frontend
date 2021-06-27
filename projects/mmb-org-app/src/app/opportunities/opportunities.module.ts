import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FuseSharedModule } from '@fuse/shared.module';
import { OpportunityFilterComponent } from './helpers/opportunity-filter/opportunity-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { OpportunitySummaryComponent } from './helpers/opportunity-summary/opportunity-summary.component';
import {OpportunitiesService} from './opportunities.service';
import { StatusBadgeComponent } from './helpers/status-badge/status-badge.component';

@NgModule({
  declarations: [AllComponent, CreateComponent, DetailsComponent, OpportunityFilterComponent, OpportunitySummaryComponent, StatusBadgeComponent],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    FuseSharedModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [OpportunitiesService]
})
export class OpportunitiesModule { }
