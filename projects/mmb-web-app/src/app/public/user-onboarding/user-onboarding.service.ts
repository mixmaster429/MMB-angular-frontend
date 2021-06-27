import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserOnboardingService {
constructor(private http: HttpClient) { }

    /**
     * Set user password
     */
    // TODO: Implement the api to set new password
    setUserPassword(newPassword: string): Observable<any> {
        let url = `${environment.domain}${environment.api.onboarding.setPassword}`;

        return this.http.post(url, {
            new_password1: newPassword,
            new_password2: newPassword
        });
    }
}