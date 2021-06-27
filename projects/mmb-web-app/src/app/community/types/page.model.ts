import { Blog } from './blog.model';

export class Page {
    id: number;
    title: string;
    meta: {
        type: string;
        detail_url: string;
        html_url: string;
        slug: string;
    };
    page_authors: [];
    rendered_intro: string;
    feed_image_url: string;
    date: Date;
    blogs: Blog[] = [];
    body: [];
    reacted: {
        reaction_type: string;
        uuid: string;
    };
    comments: any[];
    reactions_summary: {
        total: number
    };
}