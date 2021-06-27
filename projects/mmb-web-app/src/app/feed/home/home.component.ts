import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Feed } from '../../shared/types/feed.model';
import { FeedService } from '../feed.service';

@Component({
  selector: 'mmb-web-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  feeds: Feed[];
  isLoading: boolean = true;
  nextItems$: Observable<Feed[]>;

  constructor(private feedService: FeedService, private router: Router) { }

  ngOnInit() {
    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      this.isLoading = true;
      this.nextItems$ = this.feedService.getFeeds(this.offset.value, this.limit.value);
      this.nextItems$.subscribe((response) => {
        if (!this.feeds) {
          this.feeds = [];
        }
        this.feeds.push(...response);
        this.isLoading = false;
      });
    });
  }

  /**
   * On Page scroll event
   */
  onScroll() {
    // Trigger next set of data load
    if (this.offset.value < this.feeds.length || this.offset.value === 0) {
      this.offset.next(this.offset.value + this.limit.value);
    }
  }

  onRedirectOrg(orgHandle: string) {
    this.router.navigateByUrl(`/organisation/profile/${orgHandle}`);
  }

  onRedirectUser(userHandle: string) {
    window.location.href = `/profile/${userHandle}`;
  }

}
