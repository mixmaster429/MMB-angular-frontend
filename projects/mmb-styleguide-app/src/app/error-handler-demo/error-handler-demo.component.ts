import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorHandlerActionTypes, ErrorType } from '@mmb-universal/src/public-api';

@Component({
  selector: 'mmb-styleguide-error-handler-demo',
  templateUrl: './error-handler-demo.component.html',
  styleUrls: ['./error-handler-demo.component.scss']
})
export class ErrorHandlerDemoComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }


  /**
   * Show error toast
   */
  showErrorToast() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.ShowToastr,
      payload: {
        type: ErrorType.ERROR,
        subject: 'Error subject',
        description: 'Error description comes here'
      }
    })
  }

  /**
   * Show error toast
   */
  showWarningToast() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.ShowToastr,
      payload: {
        type: ErrorType.WARNING,
        subject: 'Warning subject',
        description: 'Warning description comes here'
      }
    })
  }

  showInfoToast() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.ShowToastr,
      payload: {
        type: ErrorType.INFO,
        subject: 'Info subject',
        description: 'Info description comes here'
      }
    })
  }

  showSuccessToast() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.ShowToastr,
      payload: {
        type: ErrorType.SUCCESS,
        subject: 'Success subject',
        description: 'Success description comes here'
      }
    })
  }

  showErrorModal() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.ShowModal,
      payload: {
        type: ErrorType.ERROR,
        subject: 'Error!',
        description: `Please contact the Administractor!`
      }
    })
  }

  redirect() {
    this.store.dispatch({
      type: ErrorHandlerActionTypes.Redirect,
      payload: {
        type: ErrorType.ERROR,
        redirectUrl: 'error',
        subject: 'Error after Redirect!',
        description: `Please contact the Administractor!`
      }
    })
  }
}
