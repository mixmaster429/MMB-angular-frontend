import { Injectable } from '@angular/core';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { CareerApplicationGet, CareerApplication } from '../types/career-application.model';
import { Career } from '../../shared/types/career.model';
import { FormGroup } from '@angular/forms';
import { UserProfile } from '../types/user-profile.model';

@Injectable({
    providedIn: 'root',
})
export class ApplyCareerService {
    selectedCareerDetails: Career;
    docsUploadStepData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    questionsStepData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    personalInfoStepData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    isSubmittingApplication$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private userProfile: UserProfile;

    constructor(private http: HttpClient) { }

    /**
     * Sets question step data
     */
    setQuestionsStepData(value: any) {
        this.questionsStepData$.next(value);
    }

    /**
     * Sets doc upload step data
     * @param value new value
     */
    setDocsUploadStepData(value: any) {
        if (value) {
            this.docsUploadStepData$.next({ ...value, ...this.docsUploadStepData$.value });
        }
    }

    /**
     * sets personal information step data
     * @param value new value
     */
    setPersonalInfoStepData(value: FormGroup) {
        this.personalInfoStepData$.next(value);
    }

    /**
     * Gets pending application of user (if any)
     * @param offerSlug slug of career
     * @param userId logged in user id 
     */
    getPendingApplication(offerSlug: string): Observable<CareerApplicationGet> {
        let url = `${environment.domain}${environment.api.career.application}?offer__slug=${offerSlug}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): CareerApplicationGet => {
                return (<any>response).objects && (<any>response).objects[0] ? (<any>response).objects[0] : of();
            })
        );
    }

    /**
     * Save draft functionality
     * @param application career application
     */
    saveDraft(application: CareerApplication): Observable<CareerApplicationGet> {
        if (application.id) {
            return this._saveNewDraft(application);
        } else {
            return this._saveExistingDraft(application);
        }
    }

    /**
     * Updates user's profile
     */
    updateUserCredentials(profileUpdates: any) {
        let url = `${environment.domain}${environment.api.career.credentials}${this.userProfile.credentials.uuid}`;

        return this.http.put(url, profileUpdates).pipe(
            map((response: HttpResponse<any>): CareerApplicationGet => {
                return <any>response;
            })
        );
    }

    /**
     * Updates user's profile location
     */
    updateUserLocation(profileUpdates: any) {
        let url = `${environment.domain}${environment.api.career.details}${this.userProfile.details.uuid}`;

        return this.http.put(url, profileUpdates).pipe(
            map((response: HttpResponse<any>): CareerApplicationGet => {
                return <any>response;
            })
        );
    }

    /**
     * Submits application
     */
    submitApplication(application: CareerApplication) {
        let url = `${environment.domain}${environment.api.career.application}`;

        return this.http.post(url, application).pipe(
            map((response: HttpResponse<any>): CareerApplicationGet => {
                return <any>response;
            })
        );
    }

    /**
     * Gets user profile
     */
    getUserProfile(): Observable<UserProfile> {
        let url = `${environment.domain}${environment.api.user.profile}?response_type=full`;
        return this.http.get(url).pipe(
            map((response: any) => {
                this.userProfile = response.results[0];
                return response.results[0];
            })
        );
    }

    /**
     * saves new draft
     * @param application career application
     */
    private _saveNewDraft(application: CareerApplication): Observable<CareerApplicationGet> {
        return of();
    }

    /**
     * updates existing draft
     * @param application career application
     */
    private _saveExistingDraft(application: CareerApplication): Observable<CareerApplicationGet> {
        let url = `${environment.domain}${environment.api.career.application}/${application.id}`;

        return this.http.put(url, application).pipe(
            map((response: HttpResponse<any>): CareerApplicationGet => {
                return <any>response;
            })
        );
    }
}