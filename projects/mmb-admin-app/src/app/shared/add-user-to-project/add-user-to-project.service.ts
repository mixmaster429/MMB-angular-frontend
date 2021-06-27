import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Project } from '../types/project.model';

@Injectable({
    providedIn: 'root',
})
export class AddUserToProjectService {
    // TODO: Make this dynamic when auth is implemented
    constructor(private http: HttpClient) { }

    /**
     * Gets all projects
     */
    addUsersToProjects(users, projects, notes: string, relevance: number): Observable<Project[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.users.assignToProjects}`;

        return this.http.post(url, {
            candidates: users,
            projects: projects,
            notes_bulk: notes,
            relevance_bulk: parseInt(relevance.toString())
        }).pipe(
            map((response: HttpResponse<any>): Project[] => {
                return (<any>response).results;
            })
        );
    }
}