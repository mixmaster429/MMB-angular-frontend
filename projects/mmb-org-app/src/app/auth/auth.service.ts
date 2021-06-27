import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthToken } from './types/auth-token.model';

export enum TOKEN_KEYS {
    TOKEN = 'token',
    TOKEN_EXPIRY = 'tokenExpiry'
}

@Injectable()
export class AuthService {
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
        let url = `${environment.mock.remoteDomain}${environment.mock.login}`;
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
        return this.isTokenValid();
    }

    /**
     * Stores user token in local storage
     * @param token user token
     * @param expiry token expiry date
     */
    public saveUserToken(token: string, expiry: Date) {
        localStorage.setItem(TOKEN_KEYS.TOKEN, token);
        // localStorage.setItem(TOKEN_KEYS.TOKEN_EXPIRY, expiry.toString());
    }

    /**
     * Removes from local storage
     */
    public removeUserToken() {
        localStorage.removeItem(TOKEN_KEYS.TOKEN);
        localStorage.removeItem(TOKEN_KEYS.TOKEN_EXPIRY);
    }

    /**
     * Checks if token is still valid
     * @param token user token
     * @param expiry token expiry date
     */
    public isTokenValid() {
        const token = localStorage.getItem(TOKEN_KEYS.TOKEN);
        if (token) {
            return true;
        }
        return false;
    }
}