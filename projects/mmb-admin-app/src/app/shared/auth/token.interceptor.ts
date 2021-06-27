import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminTokenInterceptor implements HttpInterceptor {
  constructor() { }

  /**
   * Temporary patch 
   * Fixing header to login temporarily
   * @param request 
   * @param next 
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `token ${token}`
        }
      });
    }
    return next.handle(request);
  }
}