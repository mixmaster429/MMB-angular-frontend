import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllComponent } from './all/all.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectsService } from './projects.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { NoUserAssignedPlaceholderComponent } from './helpers/no-user-assigned-placeholder/no-user-assigned-placeholder.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoProjectsCreatedPlaceholderComponent } from './helpers/no-projects-created-placeholder/no-projects-created-placeholder.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchAssignedUsersComponent } from './project-details/search-assigned-users/search-assigned-users.component';
import { SearchUserPoolComponent } from './project-details/search-user-pool/search-user-pool.component';

@NgModule({
  declarations: [AllComponent, CreateComponent, ProjectDetailsComponent, NoUserAssignedPlaceholderComponent, NoProjectsCreatedPlaceholderComponent, SearchAssignedUsersComponent, SearchUserPoolComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ProjectsRoutingModule,
    FuseSidebarModule,
    FuseSharedModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatAutocompleteModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [ProjectsService],
  entryComponents: [CreateComponent]
})
export class ProjectsModule { }
