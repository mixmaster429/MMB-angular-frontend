import { Component } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarService, NavbarType } from './shared/navbar/navbar.service';
import { AuthService } from './public/auth.service';
import { AuthService as SocialAuthService } from 'angularx-social-login';
import { SharedService } from './shared/shared.service';
import { USER_ROLE_OPTIONS } from './shared/types/user-roles.const';
import { InterestService } from './shared/interest.service';
import { Interest } from './shared/types/interest.model';

@Component({
  selector: 'mmb-web-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  navbarType: string;
  query: Interest = new Interest();

  constructor(private router: Router,
    private navbarService: NavbarService,
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private sharedService: SharedService,
    private interestService: InterestService,
    private activatedRoute: ActivatedRoute) {

    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.authService.isAuthenticated$.next(this.authService.isTokenValid());
      // details page
      if (event.url.indexOf('/careers/') !== -1 || event.url.indexOf('/events/') !== -1 || event.url.indexOf('/initiatives/') !== -1) {
        this.navbarService.setNavbarType(NavbarType.LIGHT);
      }
      // listing page
      else if (event.url.indexOf('initiatives') !== -1) {
        this.navbarService.setNavbarType(NavbarType.TRANSPARENT);
      } else {
        // otherwise
        this.navbarService.setNavbarType(NavbarType.LIGHT);
      }
    });

    // Get user roles config
    this.sharedService.getUserRolesConfiguration();

    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.query.user = params['user'];
        this.query.email = params['email'];
        this.query.username = params['username'];
        this.query.uuid_of_notification = params['uuid_of_notification'];
        this.query.career = params['career'];
        this.query.career_slug = params['career_slug'];
        this.query.event = params['event'];
        this.query.event_slug = params['event_slug'];
        this.query.initaitve = params['initaitve'];
        this.query.initiative_slug = params['initiative_slug'];
        this.query.opportunity = params['opportunity'];
        this.query.opportunity_slug = params['opportunity_slug'];
        this.query.source = params['source'];
        this.query.source_slug = params['source_slug'];
        this.query.event_type = params['event_type'];

        if (params['user']) {
          this.interestService.sendInterest(this.query).subscribe();
        }
      }
    });
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((response: any) => {
      if (response && response.authToken) {
        this.authService.googleLoginToMovemeback(response.authToken).subscribe((resp) => {
          if (resp) {
            this.authService.saveUserToken(resp.token, resp.expires);
            if (this.router.url === '/login') {
              this.router.navigate(['/']);
            }
          }
        })
      }
    });
  }

  /**
   * Logout
   */
  onLogout() {
    if (localStorage.getItem('token')) {
      this.socialAuthService.signOut().then().catch();
    }
    this.authService.removeUserToken();
    this.router.navigate(['/login']);
  }
}
