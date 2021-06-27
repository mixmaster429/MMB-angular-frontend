import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import * as MmbUniversalSentry from "@sentry/browser";

import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ImpressionComponent } from './impression/impression.component';
import { PageTrackerComponent } from './page-tracker/page-tracker.component';
import { errorHandlerReducer } from './error-handler/error-handler.reducer';
import { ModalContentComponent } from './error-handler/modal-content/modal-content.component';
import { MmbUniversalServiceConfig } from './mmb-universal.service-config';

@NgModule({
  declarations: [
    ErrorHandlerComponent,
    ImpressionComponent,
    PageTrackerComponent, ModalContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}),
    StoreModule.forFeature('error-handler', errorHandlerReducer)
  ],
  exports: [
    ErrorHandlerComponent,
    ImpressionComponent,
    PageTrackerComponent
  ],
  entryComponents: [ModalContentComponent]
})
export class MmbUniversalModule {
  constructor(config: MmbUniversalServiceConfig) {
    MmbUniversalSentry.init({
      dsn: config.sentryio
    });
  }
  static forRoot(config: MmbUniversalServiceConfig): ModuleWithProviders {
    return {
      ngModule: MmbUniversalModule,
      providers: [
        { provide: MmbUniversalServiceConfig, useValue: config }
      ]
    };
  }
}
