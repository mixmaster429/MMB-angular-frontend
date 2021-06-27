import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Career } from '../shared/types/career.model';
import { environment } from '../../../src/environments/environment';
import { ExternalCareerTracking } from './types/external-career.model';
import { Filter } from '../shared/types/filter.model';
import { SharedService } from '../shared/shared.service';
import { ToastrService } from 'ngx-toastr';

enum EVENT_INTEREST_VALUE {
    CONTACT = 1,
    INTERESTED = 2,
    HOW_IT_WORKS = 3,
    MORE_DETAILS = 4,
    NOT_INTERESTED = 5,
    NOT_SUITABLE = 6,
    OPEN = 7,
    ORG_MORE_DETAILS = 8,
    REFER = 9,
    RESET_INTEREST = 10,
}

@Injectable({
    providedIn: 'root',
})
export class CareerService {
    constructor(private http: HttpClient, private sharedService: SharedService, private toastr: ToastrService) { }

    /**
     * Loads career opporunities
     * @param offset start of item number
     * @param limit number of items to load
     * @param historic history is true/false
     */
    getCareers(offset: number, limit: number, historic: boolean, filter?: Filter): Observable<Career[]> {
        let url = environment.domain + environment.api.careers + `?historic=${historic}&limit=${limit}&offset=${offset}`;

        url = this.sharedService.applyFilterToUrl(url, filter);

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets career details by slug
     * @param slug event slug
     */
    getCareerDetails(slug: string): Observable<Career> {
        let url = environment.domain + environment.api.careerDetails + `${slug}/?response_type=full`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career => {
                return (<any>response);
            })
        );
    }

    /**
     * On external application
     */
    onExternalApplication(data: ExternalCareerTracking) {
        let url = `${environment.domain}${environment.api.career.externalApply}`;
        return this.http.post(url, data);
    }

    /**
     * User has shown interest in the career
     */
    expressInterest(career: Career) {
        let url = `${environment.domain}${environment.api.career.expressInterest}`;
        return this.http.post(url, {
            career: career.id,
            event_type: EVENT_INTEREST_VALUE.INTERESTED
        });
    }

    /**
     * User has shown interest in the career
     */
    removeInterest(career: Career) {
        let url = `${environment.domain}${environment.api.career.expressInterest}`;
        return this.http.post(url, {
            career: career.id,
            event_type: EVENT_INTEREST_VALUE.RESET_INTEREST
        });
    }

    /**
     * Loads searched careers
     * @param offset start of item number
     * @param limit number of items to load
     * @param historic history is true/false
     */
    getSearchedCareers(slug: string, offset: number, limit: number, historic: boolean): Observable<Career[]> {
        let url = environment.domain + environment.api.careersSearch +
            `?q=${slug}&indices=careers&historic=${historic}&limit=${limit}&offset=${offset}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response).results.docs;
            })
        );
    }

    getCareersByOrg(uuid: string): Observable<Career[]> {
        const url = `${environment.domain}${environment.api.careers}?organisation=${uuid}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Add career reaction
     */
    addCareerReaction(careerId: number, reactionType: number) {
        const data = {
            career: careerId,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.career.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update career reaction
     */
    updateCareerReaction(careerId: number, reactionType: number, reactionUuid: string) {
        const data = {
            career: careerId,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.career.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add career reaction
     */
    deleteCareerReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.career.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, careerId: number) {
        let newComment = {
            career: careerId,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.career.comment}`;
        return this.http.post(url, newComment);
    }

    /**
     * Added new reaction
     * @param ev
     */
    onReactionUpdated(career: Career, ev) {
        // If no reaction exists - create
        if (!career.reacted) {
            this.addCareerReaction(career.id, ev.value).subscribe((response: any) => {
                career.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (career.reacted && ev.value === career.reacted.reaction_type) {
            this.deleteCareerReaction(career.reacted.uuid).subscribe((response: any) => {
                career.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (career.reacted && ev.value !== career.reacted.reaction_type) {
            this.updateCareerReaction(career.id, ev.value, career.reacted.uuid).subscribe((response: any) => {
                career.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while updating the reaction, please try again later...')
            })
        }
    }

    /**
     * Post a new comment
     * @param comment added comment
     * @param request request
     */
    onCommentAdded(career: Career, comment: string) {
        this.postNewComment(comment, career.id).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            if (!career.comments) {
                career.comments = [];
            }
            career.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Add to favorites
     */
    addToFavorites(career: Career) {
        const url = `${environment.domain}${environment.api.career.save}`;
        return this.http.post(url, { career: career.id });
    }

    /**
     * Remove from favorites
     */
    removeFromFavorites(uuid: string) {
        const url = `${environment.domain}${environment.api.career.save}${uuid}`;
        return this.http.delete(url);
    }

    /**
     * Gets similar careers
     */
    getSimilarCareers(slug: string): Observable<Career[]> {
        const url = `${environment.domain}${environment.api.career.similar}?slug=${slug}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response).items;
            })
        );
    }

    /**
     * Gets suggested careers
     */
    getSuggestedCareers(): Observable<Career[]> {
        const url = `${environment.domain}${environment.api.careers}?feature=1`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Career[] => {
                return (<any>response).items;
            })
        );
    }
}
