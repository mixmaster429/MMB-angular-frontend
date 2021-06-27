import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-about-info-panel',
  templateUrl: './organisation-about-info-panel.component.html',
  styleUrls: ['./organisation-about-info-panel.component.scss']
})
export class OrganisationAboutInfoPanelComponent implements OnInit {
  @Input() organisation: Organisation;
  constructor() { }

  ngOnInit() {
  }

}
