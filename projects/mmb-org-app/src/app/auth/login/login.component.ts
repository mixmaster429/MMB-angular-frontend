import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const USER_KEY = 'mmb.org.user';
@Component({
  selector: 'mmb-admin-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fuseAnimations]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string[];

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    if (this.authService.isTokenValid() && localStorage.getItem(USER_KEY)) {
      // If user is authenticated, navigate to home page
      this.router.navigate(['careers']);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiry');
    }

    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * Try to login the user
   */
  onLogin() {
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe((response: any) => {
        if (response && response.token) {
          this.authService.saveUserToken(response.token, response.expiry);
          localStorage.setItem(USER_KEY, JSON.stringify(response.user));
          if (this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
          } else {
            this.router.navigate(['careers/applications']);
          }
        }
      },
      (err) => {
        if (err.error && err.error.non_field_errors) {
          this.errorMessage = err.error.non_field_errors;
        } else if (err.error && err.error.email) {
          this.errorMessage = err.error.email;
        }
      });
  }

  /**
   * Log out
   */
  onLogout() {
    localStorage.removeItem(USER_KEY);
    this.authService.removeUserToken();
    this.router.navigate(['/auth/login']);
  }

}
