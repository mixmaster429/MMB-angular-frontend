import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from '../auth.service';
import { AuthToken } from '../types/auth-token.model';
import { Router } from '@angular/router';

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

    if (this.authService.isTokenValid()) {
      // If user is authenticated, navigate to home page
      this.router.navigate(['users/management']);
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
      .subscribe((response: AuthToken) => {
        if (response && response.token) {
          this.authService.saveUserToken(response.token, response.expiry);
          this.router.navigate(['/users/management']);
        }
      },
      (err) => {
        if (err.error && err.error.non_field_errors) {
          this.errorMessage = err.error.non_field_errors;
        }
      })
  }

  /**
   * Log out
   */
  onLogout() {
    this.authService.removeUserToken();
    this.router.navigate(['/auth/login']);
  }
}
