import { Initiative } from './../initiatives/types/initiative.model';
import { Career } from './../shared/types/career.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Organisation } from './types/organisation.model';
import { Observable } from 'rxjs';
import { OrganisationCareer } from './types/organisation-career.model';
import { OrganisationEvent } from './types/organisation-event.model';
import { OrganisationInitiative } from './types/organisation-initiative.model';
import { MmbEvent } from '../events/types/event.model';

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
    constructor(private http: HttpClient) { }

    /**
     * Gets organisation details by slug
     * @param slug organisation slug
     */
    getOrganisationDetails(slug: string): Observable<Organisation> {
        let url = `${environment.domain}${environment.api.organisation.organisation}${slug}/?response_type=full`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Organisation => {
                return (<any>response);
            })
        );
    }

    /**
     * Get organisation careers
     */
    getOrganisationCareers(offset: number, limit: number, uuid?: string): Observable<Career[]> {
        let url = `${environment.domain}${environment.api.organisation.career}?limit=${limit}&offset=${offset}&organisation=${uuid}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Get organisation events
     */
    getOrganisationEvents(offset: number, limit: number, uuid?: string): Observable<MmbEvent[]> {
        let url = `${environment.domain}${environment.api.organisation.event}?limit=${limit}&offset=${offset}&organisation=${uuid}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): MmbEvent[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Get organisation initiatives
     */
    getOrganisationInitiatives(offset: number, limit: number, uuid?: string): Observable<Initiative[]> {
        let url = `${environment.domain}${environment.api.organisation.initiative}?limit=${limit}&offset=${offset}&organisation=${uuid}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * User wants to follow organisation
     */
    followOrganisation(orgId: number) {
        const data = {
            organisation: orgId
        };
        const url = `${environment.domain}${environment.api.user.followOrg}`;
        return this.http.post(url, data).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * User wants to unfollow organisation
     */
    unfollowOrganisation(uuid: string) {
        const url = `${environment.domain}${environment.api.user.followOrg}${uuid}`;
        return this.http.delete(url).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * checks if user is following the organisation
     */
    getUserFollowedOrganisations() {
        const url = `${environment.domain}${environment.api.user.followOrg}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * Create a new job
     */
    createJob(newJob: OrganisationCareer) {
        const url = `${environment.domain}${environment.api.organisation.career}`;
        return this.http.post(url, newJob).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * Create a new event
     */
    createEvent(newEvent: OrganisationEvent) {
        const url = `${environment.domain}${environment.api.organisation.event}`;
        return this.http.post(url, newEvent).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * Create a new initiative
     */
    createInitiative(newInitiative: OrganisationInitiative) {
        const url = `${environment.domain}${environment.api.organisation.initiative}`;
        return this.http.post(url, newInitiative).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }
}