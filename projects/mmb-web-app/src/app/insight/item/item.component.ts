import { Component, OnInit } from '@angular/core';
import { InsightService } from '../insight.service';
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
    private insightService: InsightService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.blog = this.route.params.pipe(
      map(p => p.slug),
      switchMap((slug) => {
        return this.insightService.getPage(slug);
      })
    );
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(blog: Blog, ev) {
    this.insightService.onReactionUpdated(blog, ev);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(blog: Blog, comment: string) {
    this.insightService.onCommentAdded(blog, comment);
  }
}
