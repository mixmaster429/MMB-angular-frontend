import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Initiative } from './types/initiative.model';
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
export class InitiativesService {
    constructor(private http: HttpClient, private sharedService: SharedService, private toastr: ToastrService) { }

    /**
     * Loads initiatives
     * @param offset start of item number
     * @param limit number of items to load
     */
    getInitiatives(offset: number, limit: number, filter?: Filter): Observable<Initiative[]> {
        let url = `${environment.domain}${environment.api.initiatives}?limit=${limit}&offset=${offset}`;
        url = this.sharedService.applyFilterToUrl(url, filter);

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets initiative details by slug
     * @param slug initiative slug
     */
    getInitiativeDetails(slug: string): Observable<Initiative> {
        let url = `${environment.domain}${environment.api.initiatives}${slug}?response_type=full`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative => {
                return (<any>response);
            })
        );
    }

    /**
     * User has shown interest in the initiative
     */
    expressInterest(initiative: Initiative) {
        let url = `${environment.domain}${environment.api.initiative.expressInterest}`;
        return this.http.post(url, {
            initiative: initiative.id,
            event_type: EVENT_INTEREST_VALUE.INTERESTED
        });
    }

    /**
     * User has shown interest in the initiative
     */
    removeInterest(initiative: Initiative) {
        let url = `${environment.domain}${environment.api.career.expressInterest}`;
        return this.http.post(url, {
            career: initiative.id,
            event_type: EVENT_INTEREST_VALUE.RESET_INTEREST
        });
    }
    /**
     * Register for initiative
     */
    onRegisterInitiative(data: any) {
        let url = `${environment.domain}${environment.api.initiative.register}`;
        return this.http.post(url, data);
    }

    /**
     * Loads searched initiatives
     * @param offset start of item number
     * @param limit number of items to load
     * @param historic history is true/false
     */
    getSearchedInitiatives(slug: string, offset: number, limit: number): Observable<Initiative[]> {
        let url = environment.domain + environment.api.search +
            `?q=${slug}&indices=initiatives&&limit=${limit}&offset=${offset}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response).results.docs;
            })
        );
    }

    /**
     * Add initiative reaction
     */
    addReaction(id: number, reactionType: number) {
        const data = {
            initiative: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.initiative.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update initiative reaction
     */
    updateReaction(id: number, reactionType: number, reactionUuid: string) {
        const data = {
            initiative: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.initiative.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add initiative reaction
     */
    deleteReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.initiative.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, id: number) {
        let newComment = {
            initiative: id,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.initiative.comment}`;
        return this.http.post(url, newComment);
    }

    /**
   * Added new reaction
   * @param ev 
   */
    onReactionUpdated(initiative: Initiative, ev) {
        // If no reaction exists - create
        if (!initiative.reacted) {
            this.addReaction(initiative.id, ev.value).subscribe((response: any) => {
                initiative.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (initiative.reacted && ev.value === initiative.reacted.reaction_type) {
            this.deleteReaction(initiative.reacted.uuid).subscribe((response: any) => {
                initiative.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (initiative.reacted && ev.value !== initiative.reacted.reaction_type) {
            this.updateReaction(initiative.id, ev.value, initiative.reacted.uuid).subscribe((response: any) => {
                initiative.reacted = response;
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
    onCommentAdded(initiative: Initiative, comment: string) {
        this.postNewComment(comment, initiative.id).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            if (!initiative.comments) {
                initiative.comments = [];
            }
            initiative.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Add to favorites
     */
    addToFavorites(initiative: Initiative) {
        const url = `${environment.domain}${environment.api.initiative.save}`;
        return this.http.post(url, { initiative: initiative.id });
    }

    /**
     * Remove from favorites
     */
    removeFromFavorites(uuid: string) {
        const url = `${environment.domain}${environment.api.initiative.save}${uuid}`;
        return this.http.delete(url);
    }

    /**
     * Gets similar experiences
     */
    getSimilarExperiences(slug: string): Observable<Initiative[]> {
        const url = `${environment.domain}${environment.api.initiative.similar}?slug=${slug}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response).items;
            })
        );
    }

    /**
     * Gets experiences by organisation
     */
    getExperiencesByOrg(uuid: string): Observable<Initiative[]> {
        const url = `${environment.domain}${environment.api.initiatives}?organisation=${uuid}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response).results;
            })
            );
        }

    /**
     * Gets suggested experiences
     */
    getSuggestedExperiences(): Observable<Initiative[]> {
        const url = `${environment.domain}${environment.api.initiatives}?feature=1`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Initiative[] => {
                return (<any>response).items;
            })
        );
    }
}
