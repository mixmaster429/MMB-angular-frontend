import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthToken } from './types/auth-token.model';

export enum TOKEN_KEYS {
    TOKEN = 'token',
    TOKEN_EXPIRY = 'tokenExpiry'
}

@Injectable()
export class AuthService {
    isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    redirectUrl: string = '';

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Try to login the user based on provided credentials
     * @param email user email
     * @param password user password
     */
    public login(email: string, password: string): Observable<AuthToken> {
        let url = `${environment.domain}${environment.api.auth.login}`;
        return this.http.post(url, {
            'email': email,
            'password': password
        }).pipe(
            map((response: HttpResponse<any>): AuthToken => {
                return (<any>response);
            })
        );
    }

    // ...
    public isAuthenticated(): boolean {
        // Check whether the token is expired and return
        // true or false
        this.isAuthenticated$.next(this.isTokenValid());
        return this.isAuthenticated$.value;
    }

    /**
     * Stores user token in local storage
     * @param token user token
     * @param expiry token expiry date
     */
    public saveUserToken(token: string, expiry: Date) {
        localStorage.setItem(TOKEN_KEYS.TOKEN, token);
        if (expiry) {
            localStorage.setItem(TOKEN_KEYS.TOKEN_EXPIRY, expiry.toString());
        }
        this.isAuthenticated$.next(true);
    }

    /**
     * Removes from local storage
     */
    public removeUserToken() {
        localStorage.removeItem(TOKEN_KEYS.TOKEN);
        localStorage.removeItem(TOKEN_KEYS.TOKEN_EXPIRY);
        this.isAuthenticated$.next(false);
    }

    /**
     * Checks if token is still valid
     * @param token user token
     * @param expiry token expiry date
     */
    public isTokenValid() {
        const token = localStorage.getItem(TOKEN_KEYS.TOKEN);
        if (token) {
            this.getUserProfile();
        }
        return token ? true : false;
    }

    /**
     * Gets user profile based on auth token
     */
    public getUserProfile() {
        const url = `${environment.domain}${environment.api.user.profile}`;
        this.http.get(url).subscribe((response: any) => {
            if (response && response.results[0]) {
                localStorage.setItem('username', response.results[0].username);
                localStorage.setItem('user', JSON.stringify(response.results[0]));
            }
        });
    }

    /**
     * Try to reset the user's password based on provided credentials
     * @param email user email
     */
    public forgotPassword(email: string) {
        let url = `${environment.domain}${environment.api.auth.forgotPassword}`;
        return this.http.post(url, {
            'email': email,
        });
    }

    /**
     * Try to reset the user's password based on provided credentials
     * @param email user email
     */
    public resetPassword(uid: string, token: string, password: string, confirmPassword: string) {
        let url = `${environment.domain}${environment.api.auth.resetPassword}?uid=${uid}&token=${token}`;
        return this.http.post(url, {
            'uid': uid,
            'token': token,
            'new_password1': password,
            'new_password2': confirmPassword
        });
    }

    /**
     * Try to register the user based on provided credentials
     * @param first_name user first name
     * @param last_name user last name
     * @param email user email
     * @param password user password
     */
    public register(first_name: string, last_name: string, email: string, password: string): Observable<AuthToken> {
        let url = `${environment.domain}${environment.api.auth.register}`;
        return this.http.post(url, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password1: password
        }).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * After Google login, share details with MMB
     */
    googleLoginToMovemeback(googleToken: string): Observable<any> {
        const url = `${environment.domain}${environment.api.auth.googleLogin}`;
        return this.http.post(url, { 'access_token': googleToken });
    }

    /**
     * Logout from MMB - expire the token in backend
     */
    logout(): Observable<any> {
        const url = `${environment.domain}${environment.api.auth.logout}`;
        return this.http.post(url, {});
    }
}
