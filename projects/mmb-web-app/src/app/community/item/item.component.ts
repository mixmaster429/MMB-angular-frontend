import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { Observable } from 'rxjs';
import { Blog } from '../types/blog.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Page } from '../types/page.model';

@Component({
  selector: 'mmb-web-app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  blog: Observable<Page>;

  constructor(
    private communityService: CommunityService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.blog = this.route.params.pipe(
      map(p => p.slug),
      switchMap((slug) => {
        return this.communityService.getPage(slug);
      })
    );
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
}
