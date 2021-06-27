import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-page-promotion-banner',
  templateUrl: './page-promotion-banner.component.html',
  styleUrls: ['./page-promotion-banner.component.scss']
})
export class PagePromotionBannerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit() {
  }

}
