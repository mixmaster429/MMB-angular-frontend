import { Component, OnInit } from '@angular/core';
import { NavbarService, NavbarType } from '../../shared/navbar/navbar.service';
declare var $: any;

@Component({
  selector: 'mmb-web-app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.setNavbarType(NavbarType.TRANSPARENT);

    $('.slider-content').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
    });

    $('.testimoinal-slider').slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
      ],
    });
  }
}
