import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListDetailedComponent } from './users-list-detailed/users-list-detailed.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SidebarFiltersComponent } from './sidebar-filters/sidebar-filters.component';
import { MatChipsModule } from '@angular/material/chips';
import { AddUserToProjectComponent } from './add-user-to-project/add-user-to-project.component';
import { SharedService } from './shared.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { BufferLoaderComponent } from './buffer-loader/buffer-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { InputSuffixLoaderComponent } from './input-suffix-loader/input-suffix-loader.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoUsersPlaceholderComponent } from './no-users-placeholder/no-users-placeholder.component';
import { UserTileComponent } from './users-list-detailed/user-tile/user-tile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { ExperienceSummaryComponent } from './users-list-detailed/user-tile/experience-summary/experience-summary.component';
import { UsersListComponent } from './users-list/users-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { InformationNotAvailableComponent } from './information-not-available/information-not-available.component';

@NgModule({
  declarations: [
    UsersListDetailedComponent,
    SidebarFiltersComponent,
    AddUserToProjectComponent,
    BufferLoaderComponent,
    ProgressSpinnerComponent,
    InputSuffixLoaderComponent,
    NoUsersPlaceholderComponent,
    UserTileComponent,
    ExperienceSummaryComponent,
    UsersListComponent,
    ConfirmationModalComponent,
    InformationNotAvailableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    FuseSharedModule,
    InfiniteScrollModule
  ],
  exports: [
    UsersListDetailedComponent,
    SidebarFiltersComponent,
    AddUserToProjectComponent,
    BufferLoaderComponent,
    ProgressSpinnerComponent,
    NoUsersPlaceholderComponent,
    UsersListComponent
  ],
  entryComponents: [AddUserToProjectComponent, ConfirmationModalComponent],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
