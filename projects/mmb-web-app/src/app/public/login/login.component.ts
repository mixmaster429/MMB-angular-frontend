import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthToken } from '../types/auth-token.model';
import { AuthService as SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mmb-web-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage: string[];
  authStateSubscriber$: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    if (this.authService.isTokenValid()) {
      // If user is authenticated, navigate to home page
      this.router.navigate(['/']);

    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiry');
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
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
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate([this.authService.redirectUrl]);
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
    try {
      if (localStorage.getItem('token')) {
        this.socialAuthService.signOut().then().catch();
      }
      this.authService.removeUserToken();
      this.router.navigate(['/login']);
    } catch (ex) {

    }
  }

  /**
   * Sign in with google
   */
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnDestroy() {
    if (this.authStateSubscriber$) {
      this.authStateSubscriber$.unsubscribe();
    }
  }
}
