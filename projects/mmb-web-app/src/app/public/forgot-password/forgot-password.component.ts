import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthToken } from '../types/auth-token.model';

@Component({
  selector: 'mmb-web-app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPaswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  errorMessage: string[];
  successMessage: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }
  /**
   * Try to reset the password
   */
  onResetPassword() {
    this.authService.forgotPassword(this.forgotPaswordForm.controls['email'].value)
      .subscribe((response: AuthToken) => {
        this.successMessage = true;
      },
        (err) => {
          if (err.error && err.error.non_field_errors) {
            this.errorMessage = err.error.non_field_errors;
          }
        });
  }
}
