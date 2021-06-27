import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-meta-info-panel',
  templateUrl: './organisation-meta-info-panel.component.html',
  styleUrls: ['./organisation-meta-info-panel.component.scss']
})
export class OrganisationMetaInfoPanelComponent implements OnInit {
  @Input() organisation: Organisation;
  constructor() { }

  ngOnInit() {
  }

}
