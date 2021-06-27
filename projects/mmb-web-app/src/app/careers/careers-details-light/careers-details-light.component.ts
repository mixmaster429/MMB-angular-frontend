import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { Career } from '../../shared/types/career.model';
import { map, tap } from 'rxjs/operators';
import { CareerService } from '../careers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../../shared/types/filter.model';

@Component({
  selector: 'mmb-web-app-careers-details-light',
  templateUrl: './careers-details-light.component.html',
  styleUrls: ['./careers-details-light.component.scss']
})
export class CareersDetailsLightComponent implements OnInit {
  isPageLoading: boolean = true;
  isLoading: boolean;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(new Filter());
  historic = true;
  careers: Career[] = [];
  nextItems$: Observable<Career[]>;
  selectedCareer: BehaviorSubject<Career> = new BehaviorSubject<Career>(new Career());
  selectedCareerDetails: Career;
  selected: string;
  isUserSearching: boolean;

  constructor(private careerService: CareerService, private route: ActivatedRoute, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(p => {
        return { slug: p.slug, query: p.query };
      }),
      tap(request => {
        // User has clicked on a career detail tile
        if (request.slug) {
          this.careerService.getCareerDetails(request.slug).pipe(
            map((response) => this.selectedCareerDetails = response)
          ).subscribe(() => this.isPageLoading = false);
        } else if (request.query) {
          // User has searched for jobs
          let filter = new Filter();
          filter.keyword = request.query;
          this.isUserSearching = true;
          this.filters.next(filter);
        }
      })
    ).subscribe();

    // Offset updated
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.nextItems$ = this.careerService.getCareers(this.offset.value, this.limit.value, this.historic, this.filters.value);
        this.nextItems$.subscribe((response) => {
          this.careers.push(...response);
          this.isPageLoading = false;
          this.isLoading = false;

          // select 1st item
          if (this.isUserSearching) {
            this.selectedCareer.next(this.careers[0]);
          }
        })
      }
    });

    // Filters updated - reset the list
    this.filters.subscribe((filters) => {
      this.isLoading = true;
      this.offset.next(0);
      this.limit.next(15);
      this.careerService.getCareers(this.offset.value, this.limit.value, this.historic, this.filters.value).subscribe((response) => {
        this.isLoading = false;
        this.isPageLoading = false;
        this.careers = response;
        if (this.isUserSearching) {
          this.selectedCareer.next(this.careers[0]);
        }
      })
    })

    this.selectedCareer.subscribe((selectedCareer: Career) => {
      if (selectedCareer && selectedCareer.slug) {
        this.careerService.getCareerDetails(selectedCareer.slug).pipe(
          map((response) => this.selectedCareerDetails = response)
        ).subscribe();
      }
    })
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    if (this.offset.value < this.careers.length || this.offset.value === 0) {
      this.offset.next(this.offset.value + this.limit.value);
    }
  }

  /**
   * Listing card clicked
   * @param slug slug of clicked item
   */
  onListingCardClicked(career: Career) {
    // this.selectedCareer.next(career);
    this.router.navigate([`careers/${career.slug}`]);
  }

  /**
   * Return if job is external
   * @param value 
   */
  isJobExternal(value: string) {
    return value && parseInt(value) > 3;
  }

  /**
   * Filters updated - filter the careers
   * @param filters 
   */
  onFiltersUpdated(filter: Filter) {
    this.filters.next(filter);
  }
}
