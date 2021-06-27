import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { Initiative } from '../types/initiative.model';
import { InitiativesService } from '../initiatives.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Filter } from '../../shared/types/filter.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'mmb-web-app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  initiatives: Initiative[] = [];
  isLoading: boolean = true;
  nextItems$: Observable<Initiative[]>;
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(new Filter());
  count: number;

  constructor(private initiativeService: InitiativesService,
    private router: Router,
    private toastr: ToastrService,
    private sharedService: SharedService) { }

  ngOnInit() {
    // get user permissions
    this.sharedService.userPermissions$.subscribe((permissions) => {
      // console.log(permissions);
    });

    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.initiativeService.getInitiatives(this.offset.value, this.limit.value).subscribe((response: any) => {
          this.initiatives.push(...response.results);
        })
      }
    });

    // Filters updated - reset the list
    this.filters.subscribe((filters) => {
      this.isLoading = true;
      this.offset.next(0);
      this.limit.next(15);
      this.initiativeService.getInitiatives(this.offset.value, this.limit.value, this.filters.value).subscribe((response: any) => {
        this.initiatives = response.results;
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
      this.router.navigate([`/initiatives/search/${ev}`]);
    }
  }

  /**
   * Add initiative to favorites
   */
  onAddToFavorites(initiative: Initiative) {
    this.initiativeService.addToFavorites(initiative).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      initiative.saved = response;
    });
  }

  /**
   * Remove initiative from favorites
   */
  onRemoveFromFavorites(initiative: Initiative) {
    const uuid = initiative.saved.uuid;
    this.initiativeService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      initiative.saved = false;
    });
  }

  /**
   * Search updated
   */
  onSearchUpdated(keyword: string) {
    this.filters.value.keyword = keyword;
    this.filters.next(this.filters.value);
  }

  /**
   * Filters updated - filter the events
   * @param filters
   */
  onFiltersUpdated(filter: Filter) {
    this.filters.next(filter);
  }
}
