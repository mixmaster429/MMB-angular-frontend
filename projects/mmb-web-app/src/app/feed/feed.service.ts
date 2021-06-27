import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Feed, PromoFeed } from '../shared/types/feed.model';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) { }

    /**
     * Loads feeds by page
     * @param page page number
     * @param limit page size
     */
    getFeeds(offset: number = 0, limit: number = 15): Observable<Feed[]> {
        const url = `${environment.domain}${environment.api.feed}?limit=${limit}&offset=${offset}&refresh=true&response_type=full`;
        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Feed[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Creates the post for user
     */
    createPost(post: string) {
        const url = `${environment.domain}${environment.api.user.post}`;
        return this.http.post(url, { post: post }).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }

    /**
     * Creates the article for user
     */
    createArticle(article: string) {
        const url = `${environment.domain}${environment.api.user.article}`;
        return this.http.post(url, { article: article }).pipe(
            map((response: HttpResponse<any>) => {
                return (<any>response);
            })
        );
    }
}
