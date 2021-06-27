import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavbarService, NavbarType } from './navbar.service';
import { AuthService } from '../../public/auth.service';
import { Router } from '@angular/router';
import { AuthService as SocialAuthService } from 'angularx-social-login';
declare var $: any;

@Component({
  selector: 'mmb-web-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  avatar = '';
  navbarType = this.navbarService.navbarType.value;
  isUserLoggedIn: boolean = false;
  navbarCollapsed = true; 
  @Output() navbarTypeUpdated: EventEmitter<string> = new EventEmitter<string>();
  constructor(private navbarService: NavbarService, private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private router: Router) { }

  ngOnInit() {
    // this.navMenu();

    this.navbarService.navbarType.subscribe((value) => {
      this.navbarType = value;
      // this.navMenu();
      this.navbarTypeUpdated.emit(value);
    });

    //check if user is authenticated
    this.authService.isAuthenticated$.subscribe((value: boolean) => {
      this.isUserLoggedIn = value;
    });

    // get user avatar
    let user = JSON.parse(localStorage.getItem('user'));
    this.avatar = user ? user.profile_image : '';
  }

  /**
   * Jquery method to animate navbar with library
   */
  navMenu() {
    // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
    $('[data-toggle="navbarToggler"]').click(function () {
      $('.navbar').toggleClass('active');
      $('body').toggleClass('canvas-open');
    });
    // MAIN MENU TOGGLER ICON
    $('.navbar-toggler').click(function () {
      $('.navbar-toggler-icon').toggleClass('active');
    });

    // NAVBAR STICKY
    var $stickyNav = $(".navbar-sticky");

    if (this.navbarType === NavbarType.TRANSPARENT) {
      $(window).on("scroll load", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
          $stickyNav.addClass("navbar-sticky-moved-up");
        } else {
          $stickyNav.removeClass("navbar-sticky-moved-up");
        }
        // apply transition
        if (scroll >= 10) {
          $stickyNav.addClass("navbar-sticky-transitioned");
        } else {
          $stickyNav.removeClass("navbar-sticky-transitioned");
        }
        // sticky on
        if (scroll >= 10) {
          $stickyNav.addClass("navbar-sticky-on");
        } else {
          $stickyNav.removeClass("navbar-sticky-on");
        }

      });
    } else {
      $(window).off("scroll load");
    }
  }

  /**
   * Logout
   */
  onLogout() {
    if (localStorage.getItem('token')) {
      this.socialAuthService.signOut().then().catch();
    }
    this.authService.logout().subscribe();
    this.authService.removeUserToken();
    this.router.navigate(['/login']);
  }

  // Route changed - close navbar
  onRouteChange() {
    // $('.navbar-toggler').click()
  }
}
