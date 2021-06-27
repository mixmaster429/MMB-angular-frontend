import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApplicationsService {
    constructor(private http: HttpClient) { }

    // /**
    //  * Gets applications
    //  */
    // getApplications(): Observable<Application[]> {
    //     let url = `${environment.mock.domain}${environment.mock.applications}`;

    //     return this.http.get(url).pipe(
    //         map((response: HttpResponse<any>): Application[] => {
    //             return (<any>response);
    //         })
    //     );
    // }

    // /**
    //  * Creates new scrumboard for application
    //  * @param application application
    //  */
    // createNewBoard(application: Application): Observable<Application> {
    //     let url = `${environment.mock.domain}${environment.mock.applications}`;

    //     return this.http.post(url, application).pipe(
    //         map((response: HttpResponse<any>): Application => {
    //             return (<any>response);
    //         })
    //     );
    // }

    // /**
    //  * Gets application
    //  */
    // getApplication(id: string): Observable<Application> {
    //     let url = `${environment.mock.domain}${environment.mock.applications}/${id}`;

    //     return this.http.get(url).pipe(
    //         map((response: HttpResponse<any>): Application => {
    //             return (<any>response);
    //         })
    //     );
    // }
}