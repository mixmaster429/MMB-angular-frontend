import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { ApplicationsSimplifiedService } from '../applications-simplified.service';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, share, tap } from 'rxjs/operators';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { FILTERS } from './helpers/types/application-filters.const';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mmb-org-app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ApplicationDetailsComponent implements OnInit {
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  form = new FormControl();
  setFirstItemActive: boolean;
  loaderMessage: string = 'Initializing the page...';
  applications: any;
  careers: any;
  selectedCareer: any;
  selectedApplication: any = 0;
  careerSlug: string
  applicationUuid: string;
  isPageLoading: boolean = true;
  isApplicationsLoading: boolean = true;
  isApplicationLoading: boolean = true;
  isLoadingMore: boolean;
  options = [{ value: 'cv', viewValue: 'Curriculum Vitae' }, { value: 'coverLetter', viewValue: 'Cover Letter' }];
  selectedOption: string = 'cv';
  filterTerm: string;
  filters = FILTERS;
  activeFilter = this.filters[0];
  background: ThemePalette = 'primary';
  employeeId: any;
  employee: any;

  constructor(private applicationsService: ApplicationsSimplifiedService,
    private route: ActivatedRoute,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private cdref: ChangeDetectorRef,
    private applicationsSimplifiedService: ApplicationsSimplifiedService,
    private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.employee = JSON.parse(localStorage.getItem('mmb.org.user'));
    this._subscribeToRouteParams();
    this._subscribeToLazyLoading();
  }

  /**
   * Returns url of PDF to be displayed
   */
  getPdfLink(option: string) {
    if (option === 'cv') {
      return this.selectedApplication.cv ? this.selectedApplication.cv : '';
    } else if (option === 'coverLetter' && this.selectedApplication) {
      return this.selectedApplication.cover_letter ? this.selectedApplication.cover_letter : '';
    } else {
      return '';
    }
  }

  /**
   * Gets applications by career slug
   */
  getApplicationsByCareerId(id: string) {
    this.isApplicationsLoading = true;

    return this.applicationsService.getApplicationsByCareerId(id, this.activeFilter.value).subscribe(res => {
      this.isPageLoading = false;
      this.applications = res;
      this.isApplicationsLoading = false;
      if (this.applicationUuid) {
        this.getApplicationDetails(this.applicationUuid);
      } else if (res && res[0] && res[0].uuid) {
        this.router.navigate([`${res[0].uuid}`], {
          relativeTo: this.route
        });
      } else {
        // no applications exist
        this.isApplicationLoading = false;
      }
      this._fuseProgressBarService.hide();
    });
  }

  /**
   * get application details
   * @param uuid application uuid
   */
  getApplicationDetails(uuid: string) {
    this.applicationsService.getApplicationDetails(uuid).subscribe((response: any) => {
      this.selectedApplication = response;
      this.isApplicationLoading = false;
      // check which tab should be active
      if (!(<number[]>this.activeFilter.value).includes(response.stage)) {
        this._setActiveTab(response.stage);
      }

      // check if careers and applications exist, else load these
      if (!this.applications) {
        this.applicationsService.careers$.subscribe(res => {
          this.loaderMessage = 'Loading career applications...';
          this.careers = res;
          // find the selected career
          this.selectedCareer = this.careers.find(career => {
            return career.slug === this.careerSlug
          });
          this.cdref.detectChanges();
          this.getApplicationsByCareerId(this.selectedCareer.uuid);
        });
      }
    }, (err) => {
      this.isApplicationLoading = false;
    });
  }

  /**
   * on filters updated, load applications
   */
  filterUpdated(filter: any, setFirstItemActive?: boolean) {
    if (this.selectedCareer) {
      if (setFirstItemActive) {
        this.applications = null;
        this.selectedApplication = null;
        this.offset.next(0);
      }
      this.isPageLoading = true;
      this._fuseProgressBarService.show();
      this.setFirstItemActive = setFirstItemActive;
      // filter by stage
      if (filter.value !== 0) {
        this.applicationsService.getApplicationsByCareerId(this.selectedCareer.uuid, filter.value, filter.isGeneralApplication).subscribe(res => {
          this._onGetApplicationsSuccess(res);
        });
      } else {
        // get interested applications
        this.applicationsService.getInterestedApplications(this.selectedCareer.uuid).subscribe((res) => {
          this._onGetApplicationsSuccess(res);
        })
      }
    }
  }

  /**
   * Application selection updated
   * @param application 
   */
  onSelectedApplicationUpdated(application) {
    if (application.interested) {
      // Load interest candidate
      this.selectedApplication = application;
      return;
    }
    if (this.applicationUuid) {
      this.router.navigateByUrl(this.router.url.replace(this.applicationUuid, application.uuid));
    } else if (application.uuid) {
      this.router.navigate([`${application.uuid}`], {
        relativeTo: this.route
      });
    }
  }

  /**
   * Gets the counter for stage
   * TODO: Map to use a better solution than name
   */
  showCounter(filter: any) {
    if (this.selectedCareer) {
      if (filter.name === 'Interview') {
        return this.selectedCareer.application_count.interviewing;
      }
      if (filter.name === 'Shortlist') {
        return this.selectedCareer.application_count.shortlist;
      }
      if (filter.name === 'Community') {
        return this.selectedCareer.application_count.long_list;
      }
      if (filter.name === 'General') {
        return this.selectedCareer.application_count.general;
      }
      if (filter.name === 'Interested') {
        return this.selectedCareer.interest_count.interested;
      }
    }
  }

  /**
   * Post user's feedback
   */
  updateFeedback(event: any) {
    this.employeeId = this.employee.employees.filter(employee => employee.organisation === this.selectedApplication.career.organisation.id);
    this.applicationsSimplifiedService.postFeedback(
      this.selectedApplication.id,
      event,
      this.selectedApplication.stage,
      this.employeeId[0].id,
      '',
    ).subscribe(res => {
      this.snackbar.open('Updated suitability', 'Close');
      this.form.reset();
      this.getApplicationDetails(this.applicationUuid);
    });
  }

  /**
   * on scroll - load next set
   */
  onScroll() {
    this.offset.next(this.offset.value + this.limit.value);
  }


  /**
   * Sets active tab based on which stage application is in
   * @param stage stage id
   */
  private _setActiveTab(stage: number) {
    this.activeFilter = FILTERS.find((filter) => {
      return (<number[]>filter.value).includes(stage);
    })
    this.filterUpdated(this.activeFilter);
  }

  /**
   * Subscribed to route params
   */
  private _subscribeToRouteParams() {
    this.route.params.pipe(
      map((params) => {
        this.careerSlug = params.careerSlug;
        this.applicationUuid = params.applicationUuid;
      }),
      tap(() => {
        this._fuseProgressBarService.show();
        this.isPageLoading = true;
        if (!this.applicationUuid) {
          // fresh page load
          this._onPageInit();
        } else {
          this.isPageLoading = false;
          this.isApplicationLoading = true;
          // only load new application details
          this.applicationsService.careers$.subscribe(res => {
            this.careers = res;
            this.selectedCareer = this.careers.find(career => {
              return career.slug === this.careerSlug
            });
          });
          this.getApplicationDetails(this.applicationUuid);
        }
        this.cdref.detectChanges();
      })
    ).subscribe();
  }

  /**
   * Lazy loading for applications
   */
  private _subscribeToLazyLoading() {
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoadingMore = true;

        // TODO: Check which of the below needs to be called
        this.applicationsSimplifiedService.getApplicationsByCareerId(this.selectedCareer.uuid, this.activeFilter.value, this.activeFilter.isGeneralApplication, this.offset.value,
          this.limit.value).subscribe((response: any) => {
            if (response && response.length > 0) {
              this.applications.push(...response);
            }
            setTimeout(() => this.isLoadingMore = false);
          }, (err) => {
            this.isLoadingMore = false;
          });
      }
    });
  }

  /**
   * Success handler for get applications succes
   * @param res response
   */
  private _onGetApplicationsSuccess(res: any) {
    this.applications = res;
    if (this.applications && this.applications.length > 0 && this.setFirstItemActive) {
      this.router.navigateByUrl(this.router.url.replace(this.applicationUuid, res[0].uuid));
    }
    this._fuseProgressBarService.hide();
    this.isPageLoading = false;
  }

  /**
   * Fresh page load
   */
  private _onPageInit() {
    this.applicationsService.careers$.subscribe(res => {
      this.loaderMessage = 'Loading career applications...';
      this.careers = res;
      // find the selected career
      this.selectedCareer = this.careers.find(career => {
        return career.slug === this.careerSlug
      });
      this.getApplicationsByCareerId(this.selectedCareer.uuid);
    });
  }
}
