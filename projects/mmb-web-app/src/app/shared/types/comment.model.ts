import { Owner } from './owner.model';

export class Comment {
    value: string;
    slug: string;
    owner: Owner;
    createdOn: Date;
    ownerId: string;
    comment?: string;
    user?: {
        profile_image: string;
        name: string;
        professional_title: string;
    };
}   