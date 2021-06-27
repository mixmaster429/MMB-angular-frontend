import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { BlogTypes } from '../types/blog-types.model';
import { Blog } from '../types/blog.model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'mmb-web-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = null;

  isLoading = false;
  featured: Blog[] = [];
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  nextItems$: Observable<Blog>;
  currentlyFeatured: Blog;
  currentlyFeaturedItemIndex: number = 0;
  featureSwitchTimer: number = 7000;

  constructor(private communityService: CommunityService) {
    this.isLoading = true;
  }

  ngOnInit() {
    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      this.isLoading = true;
      this.nextItems$ = this.communityService.getBlog();
      this.nextItems$.subscribe((response) => {
        this.page = response;
        this.isLoading = false;
      });
    });

    // get featured items
    this.communityService.getBlogsByCategory(BlogTypes.trending).subscribe((blogs: Blog[]) => {
      if (blogs && blogs[0]) {
        this.currentlyFeatured = blogs[this.currentlyFeaturedItemIndex];
      }

      // enable animation if items are > 1
      if (blogs.length > 1) {
        setInterval((blogs) => {
          if (this.currentlyFeaturedItemIndex < blogs.length - 1) {
            this.currentlyFeaturedItemIndex++;
          } else {
            this.currentlyFeaturedItemIndex = 0;
          }
          this.currentlyFeatured = blogs[this.currentlyFeaturedItemIndex];
        }, this.featureSwitchTimer, blogs);
      }
    });
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(blog: Blog, ev) {
    this.communityService.onReactionUpdated(blog, ev);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(blog: Blog, comment: string) {
    this.communityService.onCommentAdded(blog, comment);
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    // if (this.offset.value < this.totalItems$.value || this.offset.value === 0) {
    //   this.offset.next(this.offset.value + this.limit.value);
    // }
  }
}
