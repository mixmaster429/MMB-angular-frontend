import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum AVAILABLE_ORG_VIEWS {
  CAREER = 0,
  EVENTS = 1,
  EXPERIENCE = 2
};
@Component({
  selector: 'mmb-web-app-organisation-item-selector-panel',
  templateUrl: './organisation-item-selector-panel.component.html',
  styleUrls: ['./organisation-item-selector-panel.component.scss']
})
export class OrganisationItemSelectorPanelComponent implements OnInit {
  activeView: number = AVAILABLE_ORG_VIEWS.CAREER;
  @Output() selectedTabUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Sets the active view
   * @param screenId selected item
   */
  onSetActiveView(screenId: number) {
    if (this.activeView !== screenId) {
      this.activeView = screenId;
      this.selectedTabUpdated.emit(this.activeView);
    }
  }
}
