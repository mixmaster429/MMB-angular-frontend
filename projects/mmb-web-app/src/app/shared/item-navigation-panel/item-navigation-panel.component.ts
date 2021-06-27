import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-item-navigation-panel',
  templateUrl: './item-navigation-panel.component.html',
  styleUrls: ['./item-navigation-panel.component.scss']
})
export class ItemNavigationPanelComponent implements OnInit {
  @Input() isBackToTopVisible: boolean;
  @Input() next: string;
  @Input() previous: string;
  @Input() listPageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  goToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
