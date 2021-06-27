import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Initiative } from '../types/initiative.model';
import { InitiativesService } from '../initiatives.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExternalApplyComponent } from '../modal-external-apply/modal-external-apply.component';
import { Filter } from '../../shared/types/filter.model';

@Component({
  selector: 'mmb-web-app-initiatives-details-light',
  templateUrl: './initiatives-details-light.component.html',
  styleUrls: ['./initiatives-details-light.component.scss']
})
export class InitiativesDetailsLightComponent implements OnInit {
  isPageLoading: boolean = true;
  isLoading: boolean;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(new Filter());
  historic = true;
  initiatives: Initiative[] = [];
  nextItems$: Observable<Initiative[]>;
  selectedInitiative: BehaviorSubject<Initiative> = new BehaviorSubject<Initiative>(new Initiative());
  selectedInitiativeDetails: Initiative;
  isUserSearching: boolean;
  slug: string;
  
  constructor(private initiativesService: InitiativesService, private route: ActivatedRoute,
    private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      map(p => {
        return { slug: p.slug, query: p.query };
      }),
      tap(request => {
        // User has clicked on a initiatives detail tile
        if (request.slug) {
          this.slug = request.slug;
          this.initiativesService.getInitiativeDetails(request.slug).pipe(
            map((response) => this.selectedInitiativeDetails = response)
          ).subscribe(() => this.isPageLoading = false);
        } else if (request.query) {
          // User has searched for initiatives
          let filter = new Filter();
          filter.keyword = request.query;
          this.isUserSearching = true;
          this.filters.next(filter);
        }
      })
    ).subscribe();

    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.nextItems$ = this.initiativesService.getInitiatives(this.offset.value, this.limit.value);
        this.nextItems$.subscribe((response) => {
          this.initiatives.push(...response);
          this.isPageLoading = false;
          this.isLoading = false;
          // select 1st item
          if (this.isUserSearching) {
            this.selectedInitiative.next(this.initiatives[0]);
          }
        })
      }
    });

    // Filters updated - reset the list
    this.filters.subscribe((filters) => {
      this.isLoading = true;
      this.offset.next(0);
      this.limit.next(15);
      this.initiativesService.getInitiatives(this.offset.value, this.limit.value, this.filters.value).subscribe((response) => {
        this.isLoading = false;
        this.isPageLoading = false;
        this.initiatives = response;
        if (this.isUserSearching) {
          this.selectedInitiative.next(this.initiatives[0]);
        }
      })
    })

    this.selectedInitiative.subscribe((selectedInitiative: Initiative) => {
      if (selectedInitiative) {
        this.initiativesService.getInitiativeDetails(selectedInitiative.slug).pipe(
          map((response) => this.selectedInitiativeDetails = response)
        ).subscribe();
      }
    })
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    if (this.offset.value < this.initiatives.length || this.offset.value === 0) {
      this.offset.next(this.offset.value + this.limit.value);
    }
  }

  /**
   * Listing card clicked
   * @param slug slug of clicked item
   */
  onListingCardClicked(initiative: Initiative) {
    // this.selectedInitiative.next(initiative);
    this.router.navigate([`initiatives/${initiative.slug}`]);
  }

  /**
   * Return if listing is external
   * @param value 
   */
  isExternal(value: string) {
    return value && parseInt(value) > 3;
  }

  onExternalApply() {
    const modalRef = this.modalService.open(ModalExternalApplyComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.orgLogo = this.selectedInitiativeDetails.organisation.image_logo_large;
    modalRef.componentInstance.orgName = this.selectedInitiativeDetails.organisation.name;
    modalRef.componentInstance.initiativeId = this.selectedInitiativeDetails.id;
    modalRef.componentInstance.redirectUrl = this.selectedInitiativeDetails.website_redirect_url;
    modalRef.componentInstance.experienceName = this.selectedInitiativeDetails.title;
    modalRef.componentInstance.submitted.subscribe(() => {
      modalRef.dismiss();
      this.initiativesService.getInitiativeDetails(this.slug).pipe(
        map((response) => this.selectedInitiativeDetails = response)
      ).subscribe();
    });
  }

  /**
  * Filters updated - filter the careers
  * @param filters 
  */
  onFiltersUpdated(filter: Filter) {
    this.filters.next(filter);
  }
}
