import { Component, OnInit } from '@angular/core';
import { CareerService } from '../careers.service';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { Career } from '../../shared/types/career.model';
import { LazyLoadingService } from '../../shared/lazy-loading/lazy-loading.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/shared.service';
import { Filter } from '../../shared/types/filter.model';

@Component({
  selector: 'mmb-web-app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(new Filter());
  careers: Career[] = [];
  isLoading: boolean = true;
  historic = true;
  nextItems$: Observable<Career[]>;
  isGridViewActive: boolean = true;
  count: number;

  constructor(private careerService: CareerService,
    private router: Router,
    private toastr: ToastrService,
    private sharedService: SharedService) {
  }

  ngOnInit() {
    // get user permissions
    this.sharedService.userPermissions$.subscribe((permissions) => {
      // console.log(permissions);
    });

    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.careerService.getCareers(this.offset.value, this.limit.value, this.historic).subscribe((response: any) => {
          this.careers.push(...response.results);
        })
      }
    });

    // Filters updated - reset the list
    this.filters.subscribe((filters) => {
      this.isLoading = true;
      this.offset.next(0);
      this.limit.next(15);
      this.careerService.getCareers(this.offset.value, this.limit.value, this.historic, this.filters.value).subscribe((response: any) => {
        this.careers = response.results;
        this.count = response.count;
        this.isLoading = false;
      })
    });
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    this.offset.next(this.offset.value + this.limit.value);
  }

  /**
   * on search
   * @param ev event
   */
  onSearch(ev) {
    if (ev) {
      this.router.navigate([`/careers/search/${ev}`]);
    }
  }

  /**
   * Add career to favorites
   */
  onAddToFavorites(career: Career) {
    this.careerService.addToFavorites(career).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      career.saved = response;
    });
  }

  /**
   * Remove career from favorites
   */
  onRemoveFromFavorites(career: Career) {
    const uuid = career.saved.uuid;
    this.careerService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      career.saved = false;
    });
  }

  /**
   * Express interest
   */
  onExpressInterest(career: Career) {
    this.careerService.expressInterest(career).subscribe((response) => {
      this.toastr.success('Expressed interested', 'Success');
      career.interested = <any>response;
    });
  }

  /**
   * Filters updated - filter the events
   * @param filters
   */
  onFiltersUpdated(filter: Filter) {
    this.filters.next(filter);
  }

  /**
   * Search updated
   */
  onSearchUpdated(keyword: string) {
    this.filters.value.keyword = keyword;
    this.filters.next(this.filters.value);
  }
}
