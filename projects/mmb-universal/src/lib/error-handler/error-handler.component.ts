import { Component, OnInit, Optional } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MmbUniversalSentry from "@sentry/browser";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorHandlerState } from './error-handler.reducer';
import { errorState } from './error-handler.selector';
import { ErrorHandlerActionTypes, ErrorType } from './error-handler.actions';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { Router } from '@angular/router';
import { MmbUniversalServiceConfig } from '../mmb-universal.service-config';

@Component({
  selector: 'mmb-universal-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {
  state: Observable<ErrorHandlerState>;
  constructor(
    private store: Store<any>,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private router: Router,
    private config: MmbUniversalServiceConfig) { }

  ngOnInit() {
    this.state = this.store.pipe(
      select(errorState),
      map(state => {
        switch (state.action) {
          case ErrorHandlerActionTypes.ShowToastr: {
            this.toastHandler(state);
            break;
          }
          case ErrorHandlerActionTypes.ShowModal: {
            this.modalHandler(state);
            break;
          }
          case ErrorHandlerActionTypes.Redirect: {
            this.redirectHandler(state);
          }
        }
        return state;
      })
    );
  }

  /**
   * Handler for showing toastr
   */
  private toastHandler = (state) => {
    if (state.type === ErrorType.ERROR) {
      this.toastr.error(state.description, state.subject);
    }
    if (state.type === ErrorType.WARNING) {
      this.toastr.warning(state.description, state.subject);
    }
    if (state.type === ErrorType.SUCCESS) {
      this.toastr.success(state.description, state.subject);
    }
    if (state.type === ErrorType.INFO) {
      this.toastr.info(state.description, state.subject);
    }
    // Log on Sentry
    if (this.config.sentryLogging.minor && (state.type === ErrorType.ERROR || state.type === ErrorType.WARNING)) {
      MmbUniversalSentry.captureException(`
        ${this.config.prefix}[${state.type}] 
        ${state.subject} -- ${state.description}`);
    }
  }

  /**
   * Handler for showing modal
   */
  private modalHandler = (state) => {
    // Show modal
    const modalRef = this.modalService.open(ModalContentComponent, { centered: true });
    modalRef.componentInstance.state = {
      title: state.subject,
      description: state.description
    }

    // Log on Sentry
    if (this.config.sentryLogging.major) {
      MmbUniversalSentry.captureException(`
        ${this.config.prefix}[${state.type}] 
        ${state.subject} -- ${state.description}`);
    }
  }

  /**
   * Handler for redirects
   */
  private redirectHandler = (state) => {
    // Log on Sentry
    if (this.config.sentryLogging.critical) {
      MmbUniversalSentry.captureException(`
        ${this.config.prefix}[${state.type}] 
        ${state.subject} -- ${state.description}`);
    }

    this.router.navigateByUrl(state.redirectUrl);
  }
}
