import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthToken } from '../types/auth-token.model';

@Component({
  selector: 'mmb-web-app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  forgotPaswordForm = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });
  errorMessage: string[];
  successMessage: boolean = false;
  paramUid: string;
  paramToken: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.paramUid = params['uid'];
      this.paramToken = params['token'];
  });
  }

  ngOnInit() {
  }

  /**
   * Try to reset the password
   */
  onResetPassword() {
    this.authService.resetPassword(this.paramUid, this.paramToken, this.forgotPaswordForm.controls['password'].value, this.forgotPaswordForm.controls['confirmPassword'].value)
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
