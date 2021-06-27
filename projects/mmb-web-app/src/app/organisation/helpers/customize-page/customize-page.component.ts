import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.scss']
})
export class CustomizePageComponent implements OnInit {
  @Input() isAdminViewEnabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
