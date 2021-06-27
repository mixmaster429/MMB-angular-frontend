import { ResponseSummary } from './helpers/response-summary.model';
import { Owner } from './helpers/owner.model';
import { Comment } from '../../shared/types/comment.model';

export class RequestFeed {
    id: number;
    slug: string;
    owner: Owner;
    title: string;
    cover: string;
    country: string;
    city: string;
    city_custom: string;
    votes: number;
    reactions: number;
    voted: any;
    comments: Comment[];
    background: {
        color?: string;
        image?: string;
    };
    user: {
        name: string;
        profile_image: string;
        professional_title: string;
        handle: string;
    };
    created: Date;
    tags: string[];
    responses: ResponseSummary;
    question: string;
    reacted: {
        reaction_type: number;
        uuid: string;
    };
    reactions_summary: {
        total: number
    }
    answers: any[];
    votes_total: number;
    saved: any;
}