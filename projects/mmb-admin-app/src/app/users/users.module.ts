import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllComponent } from './all/all.component';
import { MatIconModule } from '@angular/material/icon';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { UsersService } from './users.service';
import { MatListModule } from '@angular/material/list';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CandidateDetailsComponent } from './advanced-search/candidate-details/candidate-details.component';
import { EducationExperienceDetailsComponent } from './advanced-search/education-experience-details/education-experience-details.component';
import { CompanyDetailsComponent } from './advanced-search/company-details/company-details.component';
import { FilterHelpersService } from '../shared/sidebar-filters/filter-helpers.service';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { WidgetShortlistAnalyticsComponent } from './helpers/widget-shortlist-analytics/widget-shortlist-analytics.component';
import { WidgetVisitsAnalyticsComponent } from './helpers/widget-visits-analytics/widget-visits-analytics.component';
import { WidgetApplicationsAnalyticsComponent } from './helpers/widget-applications-analytics/widget-applications-analytics.component';
import { WidgetProfileSettingsAnalyticsComponent } from './helpers/widget-profile-settings-analytics/widget-profile-settings-analytics.component';
import { MatBadgeModule } from '@angular/material/badge';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AllComponent, AdvancedSearchComponent, CandidateDetailsComponent, EducationExperienceDetailsComponent, CompanyDetailsComponent, CreateComponent, DetailsComponent, WidgetShortlistAnalyticsComponent, WidgetVisitsAnalyticsComponent, WidgetApplicationsAnalyticsComponent, WidgetProfileSettingsAnalyticsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    InfiniteScrollModule,

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatSliderModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatTooltipModule,
    FuseSidebarModule,
    FuseSharedModule,
    FuseWidgetModule,
    SharedModule
  ],
  providers: [UsersService, FilterHelpersService]
})
export class UsersModule { }
