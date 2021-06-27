import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input() image: string;
  @Input() avatarImage: string;
  @Input() url: string;
  @Input() title: string;
  @Input() heading: string;
  @Input() summary: string;
  @Input() description: string;
  @Input() date?: string;
  @Input() location: string;
  @Input() author: string;
  @Input() icon: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
