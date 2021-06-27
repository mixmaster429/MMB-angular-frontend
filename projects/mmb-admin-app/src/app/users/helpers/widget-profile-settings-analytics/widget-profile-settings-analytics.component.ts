import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ProfileSettings } from '../../types/user-analytics.model';

@Component({
  selector: 'mmb-admin-app-widget-profile-settings-analytics',
  templateUrl: './widget-profile-settings-analytics.component.html',
  styleUrls: ['./widget-profile-settings-analytics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class WidgetProfileSettingsAnalyticsComponent implements OnInit {
  @Input() profileSettings: ProfileSettings;
  constructor() { }

  ngOnInit() {
  }

}
