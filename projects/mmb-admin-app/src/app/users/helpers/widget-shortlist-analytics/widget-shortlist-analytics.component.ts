import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ShortlistingAnalytics } from '../../types/user-analytics.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'mmb-admin-app-widget-shortlist-analytics',
  templateUrl: './widget-shortlist-analytics.component.html',
  styleUrls: ['./widget-shortlist-analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class WidgetShortlistAnalyticsComponent implements OnInit {
  @Input() shortlistingAnalytics: ShortlistingAnalytics;
  constructor() { }

  ngOnInit() {
  }

}
