import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, forkJoin, of } from 'rxjs';
import { MmbEvent } from '../types/event.model';
import { EventsService } from '../events.service';
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
  isLoading: boolean = true;
  historic = true;
  nextItems$: Observable<MmbEvent[]>;
  isGridViewActive: boolean = true;
  events: MmbEvent[] = [];
  count: number;

  constructor(private eventsService: EventsService,
    private lazyLoadingService: LazyLoadingService,
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
        this.eventsService.getEvents(this.offset.value, this.limit.value).subscribe((response: any) => {
          this.events.push(...response.results);
        })
      }
    });

    // Filters updated - reset the list
    this.filters.subscribe((filters) => {
      this.isLoading = true;
      this.offset.next(0);
      this.limit.next(15);
      this.eventsService.getEvents(this.offset.value, this.limit.value, this.filters.value).subscribe((response: any) => {
        this.events = response.results;
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
      this.router.navigate([`/events/search/${ev}`]);
    }
  }

  /**
   * Add event to favorites
   */
  onAddToFavorites(event: MmbEvent) {
    this.eventsService.addToFavorites(event).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      event.saved = response;
    });
  }

  /**
   * Remove event from favorites
   */
  onRemoveFromFavorites(event: MmbEvent) {
    const uuid = event.saved.uuid;
    this.eventsService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      event.saved = false;
    });
  }

  /**
   * Filters updated - filter the events
   * @param filters
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
