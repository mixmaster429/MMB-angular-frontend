import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { User } from './types/user.model';
import { Experience } from './types/helpers/experience.model';
import { Education } from './types/helpers/education.model';
import { Language } from './types/helpers/language.model';
import { Skill } from './types/helpers/skill.model';
import { UserDetails } from './types/helpers/user-details.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) { }

    docsUploadStepData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    selectedCareerDetails: User;

    user: User;
    /**
     * Loads user's profile
     * @param userId get profile by user id
     */
    getUserProfile(): Observable<User> {
        const url = `${environment.domain}${environment.api.user.profile}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): User => {
                return this.user = (<any>response).results[0];
            })
        );
    }

    /**
     * Creates user's profile first/last name
     */
    createUserName(first_name: string, last_name: string) {
        let url = `${environment.domain}${environment.api.user.user}`;

        return this.http.post(url, {
            'first_name': first_name,
            'last_name': last_name,
            // 'username': this.user.username
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }

    /**
     * Updates user's profile first/last name
     */
    updateUserName(first_name: string, last_name: string) {
        let url = `${environment.domain}${environment.api.user.user}${this.user.username}`;

        return this.http.put(url, {
            'first_name': first_name,
            'last_name': last_name,
            'username': this.user.username
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }

    /**
     * Creates user's profile credentials
     */
    createUserCredentials(professional_title: string) {
        let url = `${environment.domain}${environment.api.career.credentials}`;

        return this.http.post(url, {
            'professional_title': professional_title,
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }
    /**
     * Updates user's profile credentials
     */
    updateUserCredentials(professional_title: string) {
        let url = `${environment.domain}${environment.api.career.credentials}${this.user.credentials.uuid}`;

        return this.http.put(url, {
            'professional_title': professional_title,
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }

    /**
     * Creates user's profile details
     */
    createUserDetails(country_signup: number, city_signup: number) {
        let url = `${environment.domain}${environment.api.career.details}`;

        return this.http.post(url, {
            'country_signup': country_signup,
            'city_signup': city_signup,
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }
    /**
     * Updates user's profile details
     */
    updateUserDetails(country_signup: number, city_signup: number) {
        let url = `${environment.domain}${environment.api.user.user}${this.user.username}`;

        return this.http.put(url, {
            'country_signup': country_signup,
            'city_signup': city_signup,
        }).pipe(
            map((response: HttpResponse<any>): UserDetails => {
                return <any>response;
            })
        );
    }

    /**
     * Updates user's profile location
     */
    updateUserLocation(profileUpdates: any) {
        let url = `${environment.domain}${environment.api.user.user}${this.user.username}`;

        return this.http.put(url, profileUpdates).pipe(
            map((response: HttpResponse<any>): User => {
                return <any>response;
            })
        );
    }
    /**
     * Updates user's profile profile image
     */
    updateUserProfileImage(profile_image_upload_name: string): Observable<User> {
        let url = `${environment.domain}${environment.api.user.user}${this.user.username}`;
        return this.http.put(url, {
            'profile_image_upload_name': profile_image_upload_name,
            'handle': this.user.handle,
        }).pipe(
            map((response: HttpResponse<any>): User => {
                return (<any>response);
            })
        );
    }
    /**
     * Loads user's skills
     */
    getUserSkills(): Observable<Skill> {
        const url = `${environment.domain}${environment.api.user.skill}?response_type=full`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Skill => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Loads user's languages
     */
    getUserLanguages(): Observable<Language> {
        const url = `${environment.domain}${environment.api.user.language}?response_type=full`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Language => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Updates user's summary
     */
    updateUserSummary(summary: string): Observable<User> {
        let url = `${environment.domain}${environment.api.user.credential}${this.user.credentials.uuid}/`;
        return this.http.put(url, {
            'summary': summary,
        }).pipe(
            map((response: HttpResponse<any>): User => {
                return (<any>response);
            })
        );
    }

    /**
     * Updates user's phone contact
     */
    updateUserPhone(summary: string): Observable<User> {
        let url = `${environment.domain}${environment.api.user.user}${this.user.username}/`;
        return this.http.put(url, {
            'summary': summary,
        }).pipe(
            map((response: HttpResponse<any>): User => {
                return (<any>response);
            })
        );
    }

    /**
     * Create user's experience
     */
    addUserExperience(title: string, organisation: string, startDate: Date, endDate: Date, summary: string): Observable<Experience> {
        let url = `${environment.domain}${environment.api.user.experience}`;
        return this.http.post(url, {
            "title": title,
            "organisation": organisation,
            "experience_type": 1,
            "start_date": startDate,
            "end_date": endDate || null,
            "summary": summary
        }).pipe(
            map((response: HttpResponse<any>): Experience => {
                return (<any>response);
            })
        );
    }
    /**
     * Edit user's experience
     */
    editUserExperience(uuid: string, title: string, organisation: string, startDate: Date, endDate: Date, summary: string): Observable<Experience> {
        let url = `${environment.domain}${environment.api.user.experience}${uuid}`;
        return this.http.put(url, {
            "title": title,
            "organisation": organisation,
            "experience_type": 1,
            "start_date": startDate,
            "end_date": endDate || null,
            "summary": summary
        }).pipe(
            map((response: HttpResponse<any>): Experience => {
                return (<any>response);
            })
        );
    }

    /**
     * Delete user's experience
     */
    deleteUserExperience(uuid: string): Observable<Experience> {
        let url = `${environment.domain}${environment.api.user.experience}${uuid}`;
        return this.http.delete(url).pipe(
            map((response: HttpResponse<any>): Experience => {
                return (<any>response);
            })
        );
    }

    /**
     * Create user's educations
     */
    addUserEducation(organisation: string, field: string, notes: string, startDate: Date, endDate: Date): Observable<Education> {
        let url = `${environment.domain}${environment.api.user.education}`;
        return this.http.post(url, {
            "organisation": organisation,
            "field_of_study": field,
            "activities": "All",
            "degree": "highest",
            "notes": notes,
            "start_date": startDate,
            "end_date": endDate || null,
        }).pipe(
            map((response: HttpResponse<any>): Education => {
                return (<any>response);
            })
        );
    }

    /**
     * Edit user's educations
     */
    editUserEducation(uuid: string, organisation: string, field: string, notes: string, startDate: Date, endDate: Date): Observable<Education> {
        let url = `${environment.domain}${environment.api.user.education}${uuid}`;
        return this.http.put(url, {
            "organisation": organisation,
            "field_of_study": field,
            "activities": "All",
            "degree": "highest",
            "notes": notes,
            "start_date": startDate,
            "end_date": endDate || null,
        }).pipe(
            map((response: HttpResponse<any>): Education => {
                return (<any>response);
            })
        );
    }
    /**
     * Delete user's educations
     */
    deleteUserEducation(uuid: string): Observable<Education> {
        let url = `${environment.domain}${environment.api.user.education}${uuid}`;
        return this.http.delete(url).pipe(
            map((response: HttpResponse<any>): Education => {
                return (<any>response);
            })
        );
    }

    /**
     * Create user's language
     */
    addLanguage(language: string): Observable<Language> {
        let url = `${environment.domain}${environment.api.user.language}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(url, language, { headers: headers }).pipe(
            map((response: HttpResponse<any>): Language => {
                return (<any>response);
            })
        );
    }

    /**
     * Edit user's language
     */
    editLanguage(language: string, uuid: string): Observable<Language> {
        let url = `${environment.domain}${environment.api.user.language}${uuid}/`;
        return this.http.put(url, {
            "language": language,
        }).pipe(
            map((response: HttpResponse<any>): Language => {
                return (<any>response);
            })
        );
    }

    /**
     * Remove user's language
     */
    deleteLanguage(uuid: string): Observable<Language> {
        let url = `${environment.domain}${environment.api.user.language}${uuid}/`;
        return this.http.delete(url).pipe(
            map((response: HttpResponse<any>): Language => {
                return (<any>response);
            })
        );
    }


    /**
     * Create user's skill
     */
    addSkill(skill: string): Observable<Skill> {
        let url = `${environment.domain}${environment.api.user.skill}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(url, skill, { headers: headers }).pipe(
            map((response: HttpResponse<any>): Skill => {
                return (<any>response);
            })
        );
    }

    /**
     * Edit user's skill
     */
    editSkill(skill: string, uuid: string): Observable<Skill> {
        let url = `${environment.domain}${environment.api.user.skill}${uuid}/`;
        return this.http.put(url, {
            "skill": skill,
        }).pipe(
            map((response: HttpResponse<any>): Skill => {
                return (<any>response);
            })
        );
    }

    /**
     * Remove user's skill
     */
    deleteSkill(uuid: string): Observable<Skill> {
        let url = `${environment.domain}${environment.api.user.skill}${uuid}/`;
        return this.http.delete(url).pipe(
            map((response: HttpResponse<any>): Skill => {
                return (<any>response);
            })
        );
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

}
