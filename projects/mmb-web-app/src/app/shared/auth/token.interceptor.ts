import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'projects/mmb-web-app/src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  /**
   * Add token 
   * @param request 
   * @param next 
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token && request.url.indexOf('s3.amazonaws.com') === -1) {
      request = request.clone({
        setHeaders: {
          'Authorization': `token ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if (error.status === 401 && this.router) {
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry');
            window.location.href = `${this.router.url}`;
          }
          // if its prodouction and major internal server error occurs then redirect to 500 page
          if (error.status === 500 && environment.production) {
            window.location.href = 'internal-error';
          }
        }
        return throwError(error);
      })
    );
  }
}