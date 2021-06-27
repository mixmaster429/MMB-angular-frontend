import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApplicationsAnalytics } from '../../types/user-analytics.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'mmb-admin-app-widget-applications-analytics',
  templateUrl: './widget-applications-analytics.component.html',
  styleUrls: ['./widget-applications-analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class WidgetApplicationsAnalyticsComponent implements OnInit {
  @Input() applicationsAnalytics: ApplicationsAnalytics;
  constructor() { }

  ngOnInit() {
  }

}
