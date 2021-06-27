import { Owner } from '../../shared/types/owner.model';
import { Comment } from '../../shared/types/comment.model';
/**
 * Private proposal - Response
 */
export class ResponseProposal {
    owner: Owner;
    answer: {
        type: string;
        value: string;
        caption?: string;
    };
    comments: Comment[];
}