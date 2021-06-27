import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-terms-of-use-top-bar',
  templateUrl: './terms-of-use-top-bar.component.html',
  styleUrls: ['./terms-of-use-top-bar.component.scss']
})
export class TermsOfUseTopBarComponent implements OnInit {
  activeTab: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
