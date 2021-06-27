import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MmbUniversalModule } from '@mmb-universal/src/public-api';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './public/auth-guard.service';
import { AuthService } from './public/auth.service';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareService } from 'ngx-sharebuttons';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.api.auth.googleClientId)
  }
]);

export function provideConfig() {
  return config;
}

/**
 * App module - Movemeback web app
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    SharedModule,
    NgbModule,
    SocialLoginModule,
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
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [AuthGuardService, AuthService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
