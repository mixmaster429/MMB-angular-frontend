import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Blog } from './types/blog.model';
import { environment } from 'projects/mmb-web-app/src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RelatedItemsListService {
    constructor(private http: HttpClient) { }

    /**
     * Gets blogs by category
     * @param slug category slug
     */
    getBlogsByCategory(slug: string): Observable<Blog[]> {
        const url = `${environment.domain}${environment.api.media.trending}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Blog[] => {
                return (<any>response).results;
            })
        );
    }
}