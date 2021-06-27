import { Component, OnInit, Input } from '@angular/core';
import { AnalyticsItem } from '../../types/helpers/analytics-item.model';

@Component({
  selector: 'mmb-web-app-user-dashboard-info',
  templateUrl: './user-dashboard-info.component.html',
  styleUrls: ['./user-dashboard-info.component.scss']
})
export class UserDashboardInfoComponent implements OnInit {
  @Input() analyticsInfo: AnalyticsItem[];
  constructor() { }

  ngOnInit() {
  }

}
