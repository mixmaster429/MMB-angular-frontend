import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { VisitsAnalytics } from '../../types/user-analytics.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'mmb-admin-app-widget-visits-analytics',
  templateUrl: './widget-visits-analytics.component.html',
  styleUrls: ['./widget-visits-analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class WidgetVisitsAnalyticsComponent implements OnInit {
  @Input() visitsAnalytics: VisitsAnalytics;
  constructor() { }

  ngOnInit() {
  }

}
