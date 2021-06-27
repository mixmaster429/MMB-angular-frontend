export class Opportunity {
    id: number;
    slug: string;
    title: string;
    opportunity: string;
    image_cover: string;
    reactions: number;
    interested: any;
    category: number;
    opportunity_type: number;
    comments_total: number;
    views_total: number;
    location_summary: string;
    end_date: string;
    state: string;
    status: number;
    city: {
        name: string;
    };
    city_custom: string;
    country: {
        name: string;
    };
    navigation: {
        next: string;
        previous: string;
    };
    user: {
        name: string;
        profile_image: string;
        professional_title: string;
        handle: string;
    };
    created: Date;
    comments: Comment[];
    reacted: {
        reaction_type: number;
        uuid: string;
    };
    voted: any;
    votes: number;
    reactions_summary: {
        total: number;
    };
    saved: any;
    votes_total: number;
    responded: any;
}

export class Comment {
    user: {
        name: string;
        profile_image: string;
        professional_title: string;
        handle: string;
    };
    created: Date;
    comment: string;
    votes_total: number;
    voted: any;
}