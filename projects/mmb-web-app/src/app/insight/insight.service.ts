import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Page } from './types/page.model';
import { Blog } from './types/blog.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class InsightService {
    constructor(private http: HttpClient, private toastr: ToastrService) { }

    /**
     * Gets page
     * @param slug page slug
     */
    getPage(slug: string): Observable<Page> {
        const url = `${environment.api.media.domain}${environment.api.media.pages}/${slug}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Page => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets blog detail by slug
     * @param slug page slug
     */
    getBlog(): Observable<Blog> {
        const url = `${environment.domain}${environment.api.insight.insightPage}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Blog => {
                return (<any>response);
            })
        );
    }

    /**
     * Gets blogs by category
     * @param slug category slug
     */
    getBlogsByCategory(slug: string): Observable<Blog[]> {
        const url = `${environment.api.media.domain}${environment.api.media.category}/${slug}`;

        return this.http.get(url).pipe(
            map((response: HttpResponse<any>): Blog[] => {
                return (<any>response).results;
            })
        );
    }

    /**
     * Added new reaction
     * @param ev 
     */
    onReactionUpdated(blog: Blog, ev) {
        // If no reaction exists - create
        if (!blog.reacted) {
            this.addBlogReaction(blog.id, ev.value).subscribe((response: any) => {
                blog.reacted = response;
            }, (err) => {
                this.toastr.error('Error occurred while adding the reaction, please try again later...')
            })
        }

        // If reaction exists and same clicked, delete
        if (blog.reacted && ev.value === blog.reacted.reaction_type) {
            this.deleteBlogReaction(blog.reacted.uuid).subscribe((response: any) => {
                blog.reacted = null;
            }, (err) => {
                this.toastr.error('Error occurred while removing the reaction, please try again later...')
            })
        }

        // If reaction exists and other clicked, update
        if (blog.reacted && ev.value !== blog.reacted.reaction_type) {
            this.updateBlogReaction(blog.id, ev.value, blog.reacted.uuid).subscribe((response: any) => {
                blog.reacted = response;
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
    onCommentAdded(blog: Blog, comment: string) {
        this.postNewComment(comment, blog.id).subscribe((response: any) => {
            let user = JSON.parse(localStorage.getItem('user'));
            response.user = {
                name: `${user.first_name} ${user.last_name}`,
                professional_title: `${user.credentials.professional_title}`
            };
            if (!blog.comments) {
                blog.comments = [];
            }
            blog.comments.push(response);
        }, (err) => {
        });
    }

    /**
     * Add blog reaction
     */
    addBlogReaction(blogId: number, reactionType: number) {
        const data = {
            page: blogId,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.insight.reaction}`;
        return this.http.post(url, data);
    }

    /**
     * Update blog reaction
     */
    updateBlogReaction(blogId: number, reactionType: number, reactionUuid: string) {
        const data = {
            page: blogId,
            reaction_type: reactionType
        };
        let url = `${environment.domain}${environment.api.insight.reaction}${reactionUuid}/`;
        return this.http.put(url, data);
    }

    /**
     * Add blog reaction
     */
    deleteBlogReaction(reactionUuid: string) {
        let url = `${environment.domain}${environment.api.insight.reaction}${reactionUuid}`;
        return this.http.delete(url);
    }

    /**
     * Adds a new comment to the request
     */
    postNewComment(comment: string, blogId: number) {
        let newComment = {
            page: blogId,
            comment: comment
        };
        const url = `${environment.domain}${environment.api.insight.comment}`;
        return this.http.post(url, newComment);
    }
}