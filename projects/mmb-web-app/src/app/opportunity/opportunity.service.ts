import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseAnswer } from '../forum/types/helpers/response.answer.model';
import { RequestDetails } from '../forum/types/request-details.model';
import { PromoCategory } from '../forum/types/promo-category.model';
import { Opportunity } from './types/opportunity.model';
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
export class OpportunityService {
    // Hardcoded user object
    totalAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    totalProposals: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    /**
     * Loads opportunities
     * @param offset start of item number
     * @param limit number of items to load
     * @param historic history is true/false
     */
    getRequests(offset: number = 0, limit: number = 15, searchString: string = '', opportunityType: string = '') {
        let url = `${environment.domain}${environment.api.opportunity.requests}?limit=${limit}&offset=${offset}`;

        if (opportunityType && opportunityType !== '0') {
            url = `${url}&category=${opportunityType}`;
        }

        if (searchString) {
            url = `${url}&title=${searchString}`;
        }

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * Loads opportunities
     * @param slug slug of request
     */
    getRequestDetails(slug: string): Observable<Opportunity> {
        const url = `${environment.domain}${environment.api.opportunity.requests}${slug}?response_type=full`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Opportunity => {
                return (<any>response);
            })
        );
    }

    /**
     * Loads opportunities
     * @param string slug
     * @param number limit
     * @param number offset
     */
    getComments(slug: string, limit: number, offset: number): Observable<Opportunity> {
        const url = `${environment.domain}${environment.api.opportunity.comment}?opportunity=${slug}&limit=${limit}&offset=${offset}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Opportunity => {
                return (<any>response);
            })
        );
    }

    /**
     * Loads promotional categories
     */
    getPromoCategories(): Observable<PromoCategory[]> {
        return of([
            {
                "slug": "internet-startups",
                "value": "Internet Startups"
            },
            {
                "slug": "technology-events",
                "value": "Current Events in Technology"
            },
            {
                "slug": "www",
                "value": "World Wide Web"
            },
            {
                "slug": "smartphones",
                "value": "Smart Phones"
            },
            {
                "slug": "internet",
                "value": "The Internet"
            },
            {
                "slug": "tech-trends",
                "value": "Technology Trends"
            }
        ]);
    }


    /**
     * Posts new question to requests
     */
    postNewQuestion(question) {
        let newQuestion = {
            ...question
        };

        const url = `${environment.domain}${environment.api.opportunity.requests}`;
        return this.http.post(url, newQuestion);
    }

    /**
     * User has shown interest in the opportunity
     */
    expressInterest(request) {
        let url = `${environment.domain}${environment.api.opportunity.expressInterest}`;
        return this.http.post(url, {
            opportunity: request.id,
            event_type: EVENT_INTEREST_VALUE.INTERESTED
        });
    }

    /**
     * User has shown interest in the opportunity
     */
    removeInterest(request) {
        let url = `${environment.domain}${environment.api.opportunity.expressInterest}`;
        return this.http.post(url, {
            opportunity: request.id,
            event_type: EVENT_INTEREST_VALUE.RESET_INTEREST
        });
    }

    /**
     * Loads opportunities
     * @param slug slug of request
     */
    getResponseAnswers(requestId: number, offset: number, limit: number): Observable<ResponseAnswer> {
        const url = `${environment.domain}${environment.api.opportunity.responseAnswers}?response_type=full&request=${requestId}&limit=${limit}&offset=${offset}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            tap((response: HttpResponse<any>) => {
                this.totalAnswers.next(<number>((<any>response).count));
            }),
            map((response: HttpResponse<any>): ResponseAnswer => {
                return (<any>response.body);
            })
        );
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, request: Opportunity) {
        let newComment = {
            opportunity: request.id,
            comment: comment
        };
        console.log(newComment);
        const url = `${environment.domain}${environment.api.opportunity.comment}`;
        return this.http.post(url, newComment);
    }

    /**
     * Add opportunity reaction
     */
    addReaction(id: number, reactionType: number) {
        const data = {
            opportunity: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.opportunity.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update opportunity reaction
     */
    updateReaction(id: number, reactionType: number, reactionUuid: string) {
        const data = {
            opportunity: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.opportunity.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add connect reaction
     */
    deleteReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.opportunity.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Upvotes the item
     */
    postNewVote(request: Opportunity | RequestDetails, value: number) {
        let vote = {
            opportunity: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.opportunity.vote}`;
        return this.http.post(url, vote);
    }

    /**
     * Deletes the vote
     * @param request 
     */
    removeVote(request: Opportunity | RequestDetails) {
        const url = `${environment.domain}${environment.api.opportunity.vote}${request.voted.uuid}`;
        return this.http.delete(url);
    }

    /**
     * Update vote
     */
    updateVote(request: Opportunity | RequestDetails, value: number, voteUuid: string) {
        let vote = {
            opportunity: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.opportunity.vote}${voteUuid}/`;
        return this.http.put(url, vote);
    }

    /**
     * Added new reaction
     * @param ev 
     */
    onReactionUpdated(ev, selectedRequest: Opportunity) {
        // If no reaction exists - create
        if (!selectedRequest.reacted) {
            this.addReaction(selectedRequest.id, ev.value).subscribe((response: any) => {
                selectedRequest.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (selectedRequest.reacted && ev.value === selectedRequest.reacted.reaction_type) {
            this.deleteReaction(selectedRequest.reacted.uuid).subscribe((response: any) => {
                selectedRequest.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (selectedRequest.reacted && ev.value !== selectedRequest.reacted.reaction_type) {
            this.updateReaction(selectedRequest.id, ev.value, selectedRequest.reacted.uuid).subscribe((response: any) => {
                selectedRequest.reacted = response;
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
    onCommentAdded(comment: string, request: Opportunity) {
        this.postNewComment(comment, request).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            if (!request.comments) {
                request.comments = [];
            }
            request.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Add to favorites
     */
    addToFavorites(opportunity: Opportunity) {
        const url = `${environment.domain}${environment.api.opportunity.save}`;
        return this.http.post(url, { opportunity: opportunity.id });
    }

    /**
     * Remove from favorites
     */
    removeFromFavorites(uuid: string) {
        const url = `${environment.domain}${environment.api.opportunity.save}${uuid}`;
        return this.http.delete(url);
    }

    /**
     * Gets similar opportunities
     */
    getSimilarOpportunities(slug: string): Observable<Opportunity[]> {
        const url = `${environment.domain}${environment.api.opportunity.similar}?slug=${slug}`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Opportunity[] => {
                return (<any>response).items;
            })
        );
    }

    /**
     * Creates the opportunity
     */
    createOpportunity(data: any) {
        const url = `${environment.domain}${environment.api.opportunity.requests}`;
        return this.http.post(url, {
            opportunity: data.opportunity,
            opportunity_type: data.opportunity_type,
            category: data.category,
            country: data.country.id,
            city: data.city.id,
            title: data.title,
            start_date: data.start_date,
            end_date: data.end_date,
            allow_profile_visible: data.allow_profile_visible,
            tags: data.tags
            });
    }

    /**
     * Saves the opportunity
     */
    saveOpportunity(): Observable<any> {
        // TODO: Check for api and implement
        return of([]);
    }

    /**
     * Saves the opportunity
     */
    submitOpportunityResponse(): Observable<any> {
        // TODO: Check for api and implement
        return of([]);
    }
}
