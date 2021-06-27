/**
 * Response summary - keeps summary of all responses made on a request
 */
import { Comment } from '../../../shared/types/comment.model';

export class ResponseSummary {
    answers: number;
    likes: number;
    comments: {
        total: number;
        recent: Comment[];
    }
}