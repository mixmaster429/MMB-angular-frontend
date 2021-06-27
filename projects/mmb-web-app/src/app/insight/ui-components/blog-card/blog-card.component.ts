import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() title: string;
  @Input() slug: string;
  @Input() bgColor: string;
  @Input() bgImage: string;
  @Input() author: string;
  @Input() date: string;
  @Input() isDetailsView: boolean;
  @Input() description: string;
  @Input() authorName: string;
  @Input() authorImage: string;
  @Input() createdOnDate: Date;
  @Input() authorProfessionalTitle: string;
  @Input() coverImage: string;

  constructor() { }

  ngOnInit() {
  }

}
