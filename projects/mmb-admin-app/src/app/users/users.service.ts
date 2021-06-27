import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAnalytics } from './types/user-analytics.model';
import { User } from '../shared/types/user.model';
import { MmbFilter } from '../shared/types/filter.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) { }

    /**
     * Gets users based on search criteria
     * @param search search string
     */
    getSearchedUsers(search: string, page: number = 1, filter?: MmbFilter): Observable<User[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.users.search}?q=${search}&page=${page}`;
        if (filter) {
            if (filter.excellenceLevelFilter) {
                url = `${url}&excellence_level_id=${filter.excellenceLevelFilter}`;
            }
        }
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User[] => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets all users
     */
    getUsersDetails(): Observable<User[]> {
        let url = `${environment.mock.domain}${environment.mock.users.details}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User[] => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets user's details
     */
    getUserDetails(id: string): Observable<User> {
        let url = `${environment.mock.remoteDomain}${environment.mock.users.details}/${id}/?${environment.mock.fullResponse}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User => {
                return (<any>response);
            })
        );
    }

    /**
     * Get user's analytics data
     * @param id user id
     */
    getUserAnalytics(id: string): Observable<UserAnalytics> {
        let url = `${environment.mock.domain}${environment.mock.users.analytics}?userId=${id}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): UserAnalytics => {
                return (<any>response)[0];
            })
        );
    }
}