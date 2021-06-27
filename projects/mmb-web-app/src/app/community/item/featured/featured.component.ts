import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'mmb-web-app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class FeaturedComponent implements OnInit {
  @Input() image: string;
  @Input() promoTitle: string;
  @Input() promoDescription: string;
  @Input() slug: string;
  @Input() author: string;

  constructor() { }

  ngOnInit() {
  }

}
