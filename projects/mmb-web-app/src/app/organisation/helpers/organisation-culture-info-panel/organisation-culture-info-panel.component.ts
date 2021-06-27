import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-culture-info-panel',
  templateUrl: './organisation-culture-info-panel.component.html',
  styleUrls: ['./organisation-culture-info-panel.component.scss']
})
export class OrganisationCultureInfoPanelComponent implements OnInit {
  @Input() organisation: Organisation;
  constructor() { }

  ngOnInit() {
  }

}
