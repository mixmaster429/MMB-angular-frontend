import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../shared/types/project.model';
import { ProjectDetails } from './types/project-details.model';
import { User } from '../shared/types/user.model';
import { ProjectCandidateOverview, ProjectCandidate } from './types/project-candidate.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    constructor(private http: HttpClient) { }

    /**
     * Gets all projects
     */
    getProjects(): Observable<Project[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Project[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Creates the project
     * @param project created project value
     */
    createProject(project: Project) {
        project = {
            ...project,
            owner: 2
        };
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}`;
        return this.http.post(url, project);
    }

    /**
     * Updates project
     * @param project updated project value
     */
    updateProject(uuid: string, project: Project) {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}${uuid}/`;
        return this.http.patch(url, project);
    }

    /**
     * Delete project
     * @param projectId project to be deleted
     */
    deleteProject(projectId: number) {
        if (!projectId) {
            return of();
        }
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}/${projectId}`;
        return this.http.delete(url);
    }

    /**
     * Get project details
     * @param projectId Project Id
     */
    getProjectDetails(uuid: string): Observable<ProjectDetails> {
        if (!uuid) {
            return of();
        }
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}${uuid}/`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): ProjectDetails => {
                return (<any>response);
            })
        );
    }

    /**
     * Get project details
     * @param projectId Project Id
     */
    getProjectCandidates(id: number): Observable<ProjectCandidateOverview[]> {
        if (!id) {
            return of();
        }
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.candidate}/?${environment.mock.fullResponse}&project=${id}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): ProjectCandidateOverview[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Gets users based on search criteria
     * @param search search string
     */
    getSearchedUsers(search: string): Observable<User[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.users.search}?q=${search}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User[] => {
                return (<any>response).hits;
            })
        );
    }

    /**
     * Gets users based on search criteria
     * @param search search string
     */
    getSearchedProjects(search: string): Observable<Project[]> {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.all}?name=${search}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Project[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Saves user relevance details - score and notes
     * @param uuid record's uuid
     * @param score Score
     * @param notes notes added
     */
    saveUserRelevanceDetails(uuid: string, score?: string, notes?: string) {
        let url = `${environment.mock.remoteDomain}${environment.mock.projects.candidate}/${uuid}`;

        return this.http.patch(url, { relevance: score, notes: notes }).pipe(
            map((response: HttpResponse<any>): ProjectCandidate => {
                return (<any>response);
            })
        );
    }
}