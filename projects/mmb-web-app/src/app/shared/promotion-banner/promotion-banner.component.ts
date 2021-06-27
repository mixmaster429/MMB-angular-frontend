import { Component, OnInit, Input } from '@angular/core';

/**
 * Promotion banner component
 */
@Component({
  selector: 'mmb-web-app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss']
})
export class PromotionBannerComponent implements OnInit {
  @Input() image: string;
  @Input() promoTitle: string;
  @Input() promoDescription: string;

  constructor() { }

  ngOnInit() {
  }
}
