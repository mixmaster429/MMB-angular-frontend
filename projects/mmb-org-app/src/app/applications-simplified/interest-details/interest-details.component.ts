import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, ThemePalette } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FILTERS } from '../application-details/helpers/types/application-filters.const';
import { ApplicationsSimplifiedService } from '../applications-simplified.service';

@Component({
  selector: 'mmb-org-app-interest-details',
  templateUrl: './interest-details.component.html',
  styleUrls: ['./interest-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class InterestDetailsComponent implements OnInit {
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
   * Application selection updated
   * @param application 
   */
  onSelectedApplicationUpdated(application) {
    if (this.applicationUuid) {
      this.router.navigateByUrl(this.router.url.replace(this.applicationUuid, application.uuid));
    } else if (application.uuid) {
      this.router.navigate([`${application.uuid}`], {
        relativeTo: this.route
      });
    }
  }

  /**
   * on scroll - load next set
   */
  onScroll() {
    this.offset.next(this.offset.value + this.limit.value);
  }

  /**
   * Gets interests by career id
   */
  getInterestsByCareerId(uuid: string) {
    this.isApplicationsLoading = true;
    return this.applicationsService.getInterestsByCareerId(uuid, this.offset.value, this.limit.value).subscribe(res => {
      this.isPageLoading = false;
      this.applications = res;
      this.isApplicationsLoading = false;

      if (this.applicationUuid) {
        this.getInterestDetails(this.applicationUuid);
      } else if (res && res[0] && res[0].uuid) {
        this.router.navigate([`${res[0].uuid}`], {
          relativeTo: this.route
        });
      } else {
        // no applications exist
        this.isApplicationLoading = false;
      }
      // this._fuseProgressBarService.hide();
    }, (err) => {
      this.isApplicationLoading = false;
    });
  }

  /**
   * get application details
   * @param uuid application uuid
   */
  getInterestDetails(uuid: string) {
    this.applicationsService.getInterestDetails(uuid).subscribe((response: any) => {
      this.selectedApplication = response;
      this.isApplicationLoading = false;

      // check if careers and applications exist, else load these
      if (!this.applications) {
        this.applicationsService.careers$.subscribe(res => {
          this.loaderMessage = 'Loading career interests...';
          this.careers = res;
          // find the selected career
          this.selectedCareer = this.careers.find(career => {
            return career.slug === this.careerSlug
          });
          this.cdref.detectChanges();
          this.getInterestsByCareerId(this.selectedCareer.uuid);
        });
      }
    }, (err) => {
      this.isApplicationLoading = false;
    });
  }

  /**
   * Post user's feedback
   */
  updateFeedback(event: any) {
    this.employeeId = this.employee.employees.filter(employee => employee.organisation === this.selectedApplication.career.organisation.id);
    this.applicationsSimplifiedService.postInterestFeedback(
      this.selectedApplication.uuid,
      this.selectedApplication.id,
      event,
      this.selectedApplication.stage,
      '',
    ).subscribe(res => {
      this.snackbar.open('Updated suitability', 'Close');
      this.form.reset();
      this.getInterestDetails(this.applicationUuid);
    }, (err) => {

    });
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
        // this._fuseProgressBarService.show();
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
          this.getInterestDetails(this.applicationUuid);
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
        //  Need to check if interested or other tab is active
        this.applicationsSimplifiedService.getInterestedApplications(this.selectedCareer.uuid, this.offset.value, this.limit.value).subscribe((response: any) => {
          if (response && response.length > 0) {
            this.applications.push(...response);
          }
          setTimeout(() => this.isLoadingMore = false);
        });
      }
    }, (err) => {
      this.isLoadingMore = false;
    });
  }

  /**
   * Fresh page load
   */
  private _onPageInit() {
    this.applicationsService.careers$.subscribe(res => {
      this.loaderMessage = 'Loading career interests...';
      this.careers = res;
      // find the selected career
      this.selectedCareer = this.careers.find(career => {
        return career.slug === this.careerSlug
      });
      this.getInterestsByCareerId(this.selectedCareer.uuid);
    });
  }
}
