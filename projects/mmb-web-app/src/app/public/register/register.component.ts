import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthToken } from '../types/auth-token.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService as SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'mmb-web-app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  countries$ = this.sharedService.getCountries();
  errors;
  internalServerError: string;

  constructor(private fb: FormBuilder,
              private sharedService: SharedService,
              private authService: AuthService,
              private router: Router,
              private socialAuthService: SocialAuthService) { }

  ngOnInit() {
  }

  /**
   * Try to login the user
   */
  onRegister() {
    this.authService.register(this.registerForm.controls['first_name'].value, this.registerForm.controls['last_name'].value, this.registerForm.controls['email'].value, this.registerForm.controls['password'].value)
      .subscribe((response: AuthToken) => {
        if (response && response.token) {
          this.authService.saveUserToken(response.token, response.expiry);
          this.router.navigate(['/']);
        }
      }, (err: HttpErrorResponse) => {
        this.errors = err.error;
        if (err && err.error && err.error.non_field_errors) {
          this.internalServerError = err.error.non_field_errors[0];
        }
      });
  }

  /**
   * Sign in with google
   */
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
