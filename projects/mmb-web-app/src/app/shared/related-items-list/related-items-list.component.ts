import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './types/blog.model';
import { RelatedItemsListService } from './related-items-list.service';

@Component({
  selector: 'mmb-web-app-related-items-list',
  templateUrl: './related-items-list.component.html',
  styleUrls: ['./related-items-list.component.scss']
})
export class RelatedItemsListComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  blogs: Observable<Blog[]>;
  constructor(private relatedItemsListService: RelatedItemsListService) { }

  ngOnInit() {
    this.blogs = this.relatedItemsListService.getBlogsByCategory(this.type);
  }
}