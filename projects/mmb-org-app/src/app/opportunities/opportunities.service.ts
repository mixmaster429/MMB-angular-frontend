import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Opportunity } from './types/opportunity.model';

@Injectable({
    providedIn: 'root',
})
export class OpportunitiesService {
    constructor(private http: HttpClient) { }

    /**
     * Gets opportunities
     */
    getOpportunities(): Observable<Opportunity[]> {
        let url = `${environment.mock.domain}${environment.mock.opportunities}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Opportunity[] => {
                return (<any>response);
            })
        );
    }
}