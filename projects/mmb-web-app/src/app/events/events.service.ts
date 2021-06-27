import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MmbEvent } from './types/event.model';
import { environment } from '../../../src/environments/environment';
import { EventTracking } from './types/event-tracking.model';
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
export class EventsService {
    constructor(private http: HttpClient, private sharedService: SharedService, private toastr: ToastrService) { }

    /**
     * Loads event opporunities
     * @param offset start of item number
     * @param limit number of items to load
     */
    getEvents(offset: number, limit: number, filter?: Filter): Observable<MmbEvent[]> {
        let url = `${environment.domain}${environment.api.event}?limit=${limit}&offset=${offset}`;
        url = this.sharedService.applyFilterToUrl(url, filter);

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): MmbEvent[] => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets event details by slug
     * @param slug event slug
     */
    getEventDetails(slug: string): Observable<MmbEvent> {
        let url = `${environment.domain}${environment.api.event}${slug}/?response_type=full`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): MmbEvent => {
                return (<any>response);
            })
        );
    }

    /**
     * Register for event
     */
    onRegisterEvent(data: EventTracking) {
        let url = `${environment.domain}${environment.api.events.register}`;
        return this.http.post(url, data);
    }

    /**
     * Loads event opporunities
     * @param offset start of item number
     * @param limit number of items to load
     */
    getSearchedEvents(slug: string, offset: number, limit: number): Observable<MmbEvent[]> {
        let url = environment.domain + environment.api.search +
            `?q=${slug}&indices=events&limit=${limit}&offset=${offset}`;


        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): MmbEvent[] => {
                return (<any>response).results.docs;
            })
        );
    }

    /**
     * User has shown interest in the event
     */
    expressInterest(event: MmbEvent) {
        let url = `${environment.domain}${environment.api.events.expressInterest}`;
        return this.http.post(url, {
            event: event.id,
            event_type: EVENT_INTEREST_VALUE.INTERESTED
        });
    }

    /**
     * User has shown interest in the event
     */
    removeInterest(event: MmbEvent) {
        let url = `${environment.domain}${environment.api.events.expressInterest}`;
        return this.http.post(url, {
            event: event.id,
            event_type: EVENT_INTEREST_VALUE.RESET_INTEREST
        });
    }

    /**
     * Add event reaction
     */
    addReaction(id: number, reactionType: number) {
        const data = {
            event: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.events.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update event reaction
     */
    updateReaction(id: number, reactionType: number, reactionUuid: string) {
        const data = {
            event: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.events.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add event reaction
     */
    deleteReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.events.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, id: number) {
        let newComment = {
            event: id,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.events.comment}`;
        return this.http.post(url, newComment);
    }

    /**
   * Added new reaction
   * @param ev 
   */
    onReactionUpdated(event: MmbEvent, ev) {
        // If no reaction exists - create
        if (!event.reacted) {
            this.addReaction(event.id, ev.value).subscribe((response: any) => {
                event.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (event.reacted && ev.value === event.reacted.reaction_type) {
            this.deleteReaction(event.reacted.uuid).subscribe((response: any) => {
                event.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (event.reacted && ev.value !== event.reacted.reaction_type) {
            this.updateReaction(event.id, ev.value, event.reacted.uuid).subscribe((response: any) => {
                event.reacted = response;
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
    onCommentAdded(event: MmbEvent, comment: string) {
        this.postNewComment(comment, event.id).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            if (!event.comments) {
                event.comments = [];
            }
            event.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Add to favorites
     */
    addToFavorites(event: MmbEvent) {
        const url = `${environment.domain}${environment.api.events.save}`;
        return this.http.post(url, { event: event.id });
    }

    /**
     * Remove from favorites
     */
    removeFromFavorites(uuid: string) {
        const url = `${environment.domain}${environment.api.events.save}${uuid}`;
        return this.http.delete(url);
    }

    /**
     * Gets similar events
     */
    getSimilarEvents(slug: string): Observable<MmbEvent[]> {
        const url = `${environment.domain}${environment.api.events.similar}?slug=${slug}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): MmbEvent[] => {
                return (<any>response).items;
            })
        );
    }
}
