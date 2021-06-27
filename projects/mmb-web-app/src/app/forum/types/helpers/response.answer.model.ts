import { Owner } from './owner.model';
import { Comment } from '../../../shared/types/comment.model';

export class ResponseAnswer {
    count: number;
    answer: {
        type: string;
        value: string;
        caption?: string;
    };
    comments: Comment[];
    results: [];
}