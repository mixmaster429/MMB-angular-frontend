import { Comment } from '../../shared/types/comment.model';
import { Vote } from '../../shared/interaction-tools/types/vote.model';
import { ResponseProposal } from './response-proposal.model';

export class RequestDetails {
    id: number;
    slug: string;
    title: string;
    cover: string;
    background: {
        color?: string;
        image?: string;
    };
    tags: string[];
    comments: Comment[];
    upvotes: Vote[];
    downvotes: Vote[];
    responses: ResponseProposal[];
    opportunity: string;
    question: string;
    reactions: number;
    reacted: {
        reaction_type: number;
        uuid: string;
    };
    voted: any;
    votes: number;
    reactions_summary: {
        total: number
    }
    answers: [];
    created: Date;
    user: {
        name: string;
        user_pic_url: string;
        professional_title: string;
    handle: string;
    };
    votes_total: number;
    interested: {
        created: Date;
        uuid: string;
        interested: boolean;
    };
}