import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../src/environments/environment';
import { Comment } from '../types/comment.model';
import { Vote } from './types/vote.model';

@Injectable({
    providedIn: 'root',
})
export class InteractionToolsService {
    constructor(private http: HttpClient) { }

    /**
     * Post new comment
     * @param comment new comment object
     */
    // postNewComment(comment: Comment) {
    //     const url = `${environment.api.mock.domain}${environment.api.mock.comments}`;
    //     return this.http.post(url, comment).pipe(
    //         map((response: HttpResponse<any>): Comment => {
    //             return (<any>response);
    //         })
    //     );
    // }

    /**
     * Posts Upvote
     */
    // postUpvote(newVote: Vote) {
    //     const url = `${environment.api.mock.domain}${environment.api.mock.upVotes}`;
    //     return this.http.post(url, newVote).pipe(
    //         map((response: HttpResponse<any>): Vote => {
    //             return (<any>response);
    //         })
    //     );
    // }

    /**
     * Posts Downvote
     */
    // postDownvote(newVote: Vote) {
    //     const url = `${environment.api.mock.domain}${environment.api.mock.downVotes}`;
    //     return this.http.post(url, newVote).pipe(
    //         map((response: HttpResponse<any>): Vote => {
    //             return (<any>response);
    //         })
    //     );
    // }
}