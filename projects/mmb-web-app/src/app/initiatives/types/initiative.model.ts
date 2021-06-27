import { Comment } from '../../shared/types/comment.model';

export class Initiative {
    id: number;
    slug: string;
    title: string;
    summary: string;
    image_banner: string;
    owner_title: string;
    headline: string;
    location_summary: string;
    website_redirect_url: string;
    created: Date;
    image_cover: string;
    description: string;
    benefits: string;
    criteria: string;
    listing_type: string;
    initiative_type: number;
    locations: any[];
    functions: any[];
    industries: any[];
    languages: any[];
    remunerations: any[];
    skills: any[];
    navigation: {
        next: string;
        previous: string;
    };
    organisation: {
        id: number;
        name: string;
        image_logo_large: string;
        image_logo_medium: string;
        logo: string;
        slug: string;
        summary: string;
        description: string;
        type_primary: number;
        type_secondary: number;
        uuid: string;
    };
    initiativereaction_set: [];
    comments: Comment[];
    reacted: {
        reaction_type: number;
        uuid: string;
    };
    reactions_summary: {
        total: number
    };
    cover: string;
    saved: any;
    interested: {
        created: Date;
        uuid: string;
        interested: boolean;
    };
    applied: {
        created: Date;
    };
    applied_external: {
        created: Date;
    };
}