import { Owner } from './owner.model';

export class PromoFeed {
    slug: string;
    value: string;
}

/** Feed */
export class Feed {
    slug: string;
    type: FeedType;
    userId: string;
    opportunity: string;
    content: FeedContent[];
    owner: Owner;
    isSponsored: boolean;
    activity_type: string;
    cover: string;
    question: {
        title: string;
        slug: string;
    };
    answer: string;
    organisation: {
        name: string;
        image_logo: string;
        logo: string;
        description: string;
        id: number;
        summary: string;
        handle: string;
    }
    user: {
        id: number;
        name: string;
        image_logo: string;
        profile_image: string;
        professional_title: string;
        handle: string;
    }
    created: Date;
    title: string;
    owner_title: string;
    headline: string;
    description: string;
    summary: string;
    request: string;
    careerreaction_set: [];
    comments: [];
    eventreaction_set: [];
    eventcomment_set: [];
    initiativereaction_set: [];
    initiativecomment_set: [];
    connectreaction_set: [];
    connectcomment_set: []
    collaborationreaction_set: [];
    collaborationcomment_set: []
    reacted: {
        reaction_type: string;
        uuid: string;
    };
    reactions_summary: {
        total: number;
    };
    votes_total: number;
    voted: any;
}

/**
 * Enum types for Feeds
 */
export enum FeedType {
    collaboration = "collaboration",
    career = "career",
    event = "event",
    media = "media",
    initiative = "initiative"
}

/** Feed Content */
export class FeedContent {
    type: string;
    value: string;
}