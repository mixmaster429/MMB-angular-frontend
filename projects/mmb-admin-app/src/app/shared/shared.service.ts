import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/types/user.model';
import { Project } from './types/project.model';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    constructor(private http: HttpClient) { }

    /**
     * Gets users for autopopulate
     * @param search search string
     */
    getUsersByQuery(search: string): Observable<User[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.users.search}?q=${search}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User[] => {
                return (<any>response).hits;
            })
        );
    }

    /**
     * Gets projects for autopopulate
     * @param search search string
     */
    getProjectsByQuery(search: string): Observable<Project[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}?name=${search}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Project[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Gets all projects
     */
    getAllProjects(): Observable<Project[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Project[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Removes previously assigned candidate from project
     * @param uuid project candidate uuid
     */
    unassignUserFromProject(uuid: string) {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.candidate}/${uuid}/`;
        return this.http.delete(url);
    }
}