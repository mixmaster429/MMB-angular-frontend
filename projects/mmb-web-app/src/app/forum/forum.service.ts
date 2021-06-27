import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { RequestFeed } from './types/request-feed.model';
import { RequestDetails } from './types/request-details.model';
import { PromoCategory } from './types/promo-category.model';
import { ResponseAnswer } from './types/helpers/response.answer.model';
import { ResponseProposal } from './types/response-proposal.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class ForumService {
    totalAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    totalProposals: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    /**
     * Loads forum requests
     * @param offset start of item number
     * @param limit number of items to load
     * @param historic history is true/false
     */
    getRequests(ownerId: string = '', offset: number = 0, limit: number = 15): Observable<RequestFeed[]> {
        let url = `${environment.domain}${environment.api.forum.requests}?response_type=full&limit=${limit}&offset=${offset}`;
        if (ownerId !== '') {
            url = `${url}?ownerId=${ownerId}`;
        }
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): RequestFeed[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Loads forum requests
     * @param slug slug of request
     */
    getRequestDetails(slug: string): Observable<RequestDetails> {
        const url = `${environment.domain}${environment.api.forum.requests}${slug}?response_type=full`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): RequestDetails => {
                return (<any>response);
            })
        );
    }

    /**
     * Loads promotional categories
     */
    getPromoCategories(): Observable<PromoCategory[]> {
        // TODO: Replace below mock api with real api when ready
        // const url = `${environment.api.mock.domain}${environment.api.mock.promoCategories}`;
        // return this.http.get(url).pipe(
        //     map((response: HttpResponse<any>): PromoCategory[] => {
        //         return (<any>response);
        //     })
        // );
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
     * Loads forum requests
     * @param slug slug of request
     */
    getResponseAnswers(requestId: number, offset: number, limit: number): Observable<ResponseAnswer> {
        const url = `${environment.domain}${environment.api.forum.responseAnswers}?response_type=full&question=${requestId}&limit=${limit}&offset=${offset}`;
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
     * Loads response answers of a slug
     * @param slug slug of request
     */
    // getResponseProposals(slug: string, pageNumber: number): Observable<ResponseProposal[]> {
    //     // TODO: Replace below mock api with real api when ready
    //     const url = `${environment.api.mock.domain}${environment.api.mock.forum.responses}/${slug}`;
    //     return this.http.get(url, { observe: 'response' }).pipe(
    //         tap((response: HttpResponse<any>) => {
    //             this.totalProposals.next(<number>(<any>response.headers.get('X-Total-Count')));
    //         }),
    //         map((response: HttpResponse<any>): ResponseProposal[] => {
    //             return (<any>response.body);
    //         })
    //     );
    // }

    /**
     * Upvotes the item
     */
    postNewVote(request: RequestFeed | RequestDetails, value: number) {
        let vote = {
            question: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.forum.vote}`;
        return this.http.post(url, vote);
    }

    /**
     * Deletes the vote
     * @param request 
     */
    removeVote(request: RequestFeed | RequestDetails) {
        const url = `${environment.domain}${environment.api.forum.vote}${request.voted.uuid}`;
        return this.http.delete(url);
    }

    /**
     * Update vote
     */
    updateVote(request: RequestFeed | RequestDetails, value: number, voteUuid: string) {
        let vote = {
            question: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.forum.vote}${voteUuid}/`;
        return this.http.put(url, vote);
    }

    /**
     * Upvotes the item of answer item
     */
    addAnswerVote(request: RequestFeed | RequestDetails, value: number) {
        let vote = {
            answer: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.forum.answerVote}`;
        return this.http.post(url, vote);
    }

    /**
     * Deletes the vote of answer item
     * @param request 
     */
    removeAnswerVote(request: RequestFeed | RequestDetails) {
        const url = `${environment.domain}${environment.api.forum.answerVote}${request.voted.uuid}`;
        return this.http.delete(url);
    }

    /**
     * Update vote of answer item
     */
    updateAnswerVote(request: RequestFeed | RequestDetails, value: number, voteUuid: string) {
        let vote = {
            answer: request.id,
            vote: value
        };
        const url = `${environment.domain}${environment.api.forum.answerVote}${voteUuid}/`;
        return this.http.put(url, vote);
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, request: RequestFeed | RequestDetails) {
        let newComment = {
            question: request.id,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.forum.comment}`;
        return this.http.post(url, newComment);
    }

    /**
     * Adds a new comment to the request
     */
    postNewCommentToAnswer(comment: string, request: RequestFeed | RequestDetails) {
        let newComment = {
            answer: request.id,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.forum.answerComment}`;
        return this.http.post(url, newComment);
    }

    /**
     * Posts new question to requests
     */
    postNewQuestion(question) {
        let newQuestion = {
            createdOn: new Date(),
            ...question
        };

        const url = `${environment.domain}${environment.api.forum.requests}`;
        return this.http.post(url, newQuestion);
    }

    /**
     * Post new answer
     * @param slug slug of request
     * @param answer new answer object
     */
    // postNewAnswer(id: string, answer: string) {
    //     // TODO: Replace below mock api with real api when ready
    //     // TODO: Make objects dynamic e.g. user object
    //     let newAnswer = {
    //         requestId: id,
    //         createdOn: new Date(),
    //         answer: [
    //             {
    //                 type: 'text',
    //                 value: answer
    //             }
    //         ]
    //     };

    //     const url = `${environment.api.mock.domain}${environment.api.mock.forum.newAnswer}`;
    //     return this.http.post(url, newAnswer).pipe(
    //         map((response: HttpResponse<any>): ResponseAnswer[] => {
    //             return (<any>response);
    //         })
    //     );
    // }

    /**
     * Posts new response
     */
    // postNewResponse(id: string, response: string) {
    //     // TODO: Replace below mock api with real api when ready
    //     // TODO: Make objects dynamic e.g. user object
    //     let newResponse = {
    //         requestId: id,
    //         createdOn: new Date(),
    //         answer: [
    //             {
    //                 type: 'text',
    //                 value: response
    //             }
    //         ]
    //     };

    //     const url = `${environment.api.mock.domain}${environment.api.mock.forum.responses}`;
    //     return this.http.post(url, newResponse).pipe(
    //         map((response: HttpResponse<any>): ResponseAnswer => {
    //             return (<any>response);
    //         })
    //     );
    // }

    /**
     * Add connect reaction
     */
    addReaction(id: number, reactionType: number) {
        const data = {
            question: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.forum.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update connect reaction
     */
    updateReaction(id: number, reactionType: number, reactionUuid: string) {
        const data = {
            question: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.forum.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add connect reaction
     */
    deleteReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.forum.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Add reaction to answer
     */
    addAnswerReaction(id: number, reactionType: number) {
        const data = {
            answer: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.forum.answerReaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update reaction to answer
     */
    updateAnswerReaction(id: number, reactionType: number, reactionUuid: string) {
        const data = {
            answer: id,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.forum.answerReaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Delete reaction
     */
    deleteAnswerReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.forum.answerReaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Added new reaction
     * @param ev 
     */
    onReactionUpdated(ev, selectedRequest: RequestFeed) {
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
     * Added new reaction
     * @param ev 
     */
    onAnswerReactionUpdated(ev, selectedRequest: any) {
        // If no reaction exists - create
        if (!selectedRequest.reacted) {
            this.addAnswerReaction(selectedRequest.id, ev.value).subscribe((response: any) => {
                selectedRequest.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (selectedRequest.reacted && ev.value === selectedRequest.reacted.reaction_type) {
            this.deleteAnswerReaction(selectedRequest.reacted.uuid).subscribe((response: any) => {
                selectedRequest.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (selectedRequest.reacted && ev.value !== selectedRequest.reacted.reaction_type) {
            this.updateAnswerReaction(selectedRequest.id, ev.value, selectedRequest.reacted.uuid).subscribe((response: any) => {
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
    onCommentAdded(comment: string, request: RequestFeed | RequestDetails) {
        this.postNewComment(comment, request).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            request.comments.push(response);
        }, (err) => {
        });
    }

    /**
   * Post a new comment to answer
   * @param comment added comment
   * @param request request
   */
    onAnswerCommentAdded(comment: string, answer: any) {
        this.postNewCommentToAnswer(comment, answer).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`,
                profile_image: `${user.profile_image}`
            };
            if (!answer.comments) {
                answer.comments = [];
            }
            answer.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Submit the answer to the question
     */
    onSubmitAnswer(questionId: number, answer: string) {
        const newAnswer = {
            question: questionId,
            answer: answer
        };
        const url = `${environment.domain}${environment.api.forum.newAnswer}`;
        return this.http.post(url, newAnswer).pipe(
            map((response: HttpResponse<any>): ResponseAnswer[] => {
                return (<any>response);
            })
        );
    }

    /**
    * Add to favorites
    */
    addToFavorites(forum: RequestFeed) {
        const url = `${environment.domain}${environment.api.forum.save}`;
        return this.http.post(url, { question: forum.id });
    }

    /**
     * Remove from favorites
     */
    removeFromFavorites(uuid: string) {
        const url = `${environment.domain}${environment.api.forum.save}${uuid}`;
        return this.http.delete(url);
    }

    /**
   * Upvote clicked
   * @param ev event
   */
    onUpvoteClicked(vote: boolean, request: RequestFeed | RequestDetails) {
        // remove vote
        if (request && request.voted && request.voted.vote === 1) {
            this.removeVote(request).subscribe((response) => {
                request.votes_total -= 1;
                request.voted = undefined;
            })
            return;
        } else if (request && request.voted && request.voted.vote === -1) {
            // User is updating vote from downvote to upvote
            this.updateVote(request, 1, request.voted.uuid).subscribe((response: any) => {
                request.votes_total += 2;
                request.voted = {
                    vote: 1,
                    uuid: response.uuid
                };
            })
            return;
        }

        // add upvote
        this.postNewVote(request, 1).subscribe((response: any) => {
            request.votes_total += 1;
            request.voted = {
                vote: 1,
                uuid: response.uuid
            };
        })
    }

    /**
     * Upvote clicked
     * @param ev event
     */
    onDownvoteClicked(vote: boolean, request: RequestFeed | RequestDetails) {
        if (request && request.voted && request.voted.vote === -1) {
            // remove vote
            this.removeVote(request).subscribe((response) => {
                request.votes_total += 1;
                request.voted = undefined;
            })
            return;
        } else if (request && request.voted && request.voted.vote === 1) {
            // User is updating vote from upvote to downvote
            this.updateVote(request, -1, request.voted.uuid).subscribe((response: any) => {
                request.votes_total -= 2;
                request.voted = {
                    vote: -1,
                    uuid: response.uuid
                };
            })
            return;
        }

        // add downvote
        this.postNewVote(request, -1).subscribe((response: any) => {
            request.votes_total -= 1;
            request.voted = {
                vote: -1,
                uuid: response.uuid
            };
        })
    }

    /**
   * Upvote clicked
   * @param ev event
   */
    onAnswerUpvoteClicked(vote: boolean, request: RequestFeed | RequestDetails) {
        // remove vote
        if (request && request.voted && request.voted.vote === 1) {
            this.removeAnswerVote(request).subscribe((response) => {
                request.votes_total -= 1;
                request.voted = undefined;
            })
            return;
        } else if (request && request.voted && request.voted.vote === -1) {
            // User is updating vote from downvote to upvote
            this.updateAnswerVote(request, 1, request.voted.uuid).subscribe((response: any) => {
                request.votes_total += 2;
                request.voted = {
                    vote: 1,
                    uuid: response.uuid
                };
            })
            return;
        }

        // add upvote
        this.addAnswerVote(request, 1).subscribe((response: any) => {
            request.votes_total += 1;
            request.voted = {
                vote: 1,
                uuid: response.uuid
            };
        })
    }

    /**
     * Upvote clicked
     * @param ev event
     */
    onAnswerDownvoteClicked(vote: boolean, request: RequestFeed | RequestDetails) {
        if (request && request.voted && request.voted.vote === -1) {
            // remove vote
            this.removeAnswerVote(request).subscribe((response) => {
                request.votes_total += 1;
                request.voted = undefined;
            })
            return;
        } else if (request && request.voted && request.voted.vote === 1) {
            // User is updating vote from upvote to downvote
            this.updateAnswerVote(request, -1, request.voted.uuid).subscribe((response: any) => {
                request.votes_total -= 2;
                request.voted = {
                    vote: -1,
                    uuid: response.uuid
                };
            })
            return;
        }

        // add downvote
        this.addAnswerVote(request, -1).subscribe((response: any) => {
            request.votes_total -= 1;
            request.voted = {
                vote: -1,
                uuid: response.uuid
            };
        })
    }
}