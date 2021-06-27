import { Component, OnInit, Input } from '@angular/core';
import { RequestFeed } from '../../types/request-feed.model';
import { ToastrService } from 'ngx-toastr';
import { ForumService } from '../../forum.service';

@Component({
  selector: 'mmb-web-app-forum-bookmark',
  templateUrl: './forum-bookmark.component.html',
  styleUrls: ['./forum-bookmark.component.scss']
})
export class ForumBookmarkComponent implements OnInit {
  @Input() request: RequestFeed;
  constructor(private forumService: ForumService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Add forum item to favorites
   */
  onAddToFavorites(forum: RequestFeed) {
    this.forumService.addToFavorites(forum).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      forum.saved = response;
    });
  }

  /**
   * Remove forum item from favorites
   */
  onRemoveFromFavorites(forum: RequestFeed) {
    const uuid = forum.saved.uuid;
    this.forumService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      forum.saved = false;
    });
  }
}
