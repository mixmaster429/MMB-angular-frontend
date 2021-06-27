import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MmbUiComponentsModule } from '@mmb-ui/src/public-api';
import { MmbUniversalModule } from '@mmb-universal/src/public-api';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlerDemoComponent } from './error-handler-demo/error-handler-demo.component';
import { ErrorComponent } from './error/error.component';
import { environment } from '../environments/environment';
import { MmbUniversalServiceConfig } from '@mmb-universal/src/lib/mmb-universal.service-config';

@NgModule({
  declarations: [
    AppComponent,
    ErrorHandlerDemoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MmbUiComponentsModule,
    MmbUniversalModule.forRoot({
      sentryio: environment.sentryio,
      sentryLogging: {
        minor: false,
        major: true,
        critical: true
      },
      apiLogging: {
        minor: false,
        major: true,
        critical: true
      }
    }),
    NgbModalModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
