export class Career {
    id: number;
    slug: string;
    is_bookmarked: boolean;
    introduction: string;
    image_cover_small: string;
    image_cover: string;
    title: string;
    headline: string;
    marketing_title: string;
    summary: string;
    listing_start_date: Date;
    created: Date;
    location_summary: string;
    description: string;
    listing_type: string;
    public_summary_html: string;
    description_html: string;
    website_redirect_url: string;
    careerreaction_set: [];
    comments: any[];
    criteria: string;
    benefits: string;
    navigation: {
        previous: string;
        next: string;
    };
    reacted: {
        reaction_type: string;
        uuid: string;
    };
    applied: {
        created: Date;
    };
    applied_external: {
        created: Date;
    };
    functions: any[];
    industries: any[];
    languages: any[];
    remunerations: any[];
    skills: any[];
    career_type: number;
    organisation: {
        id: number;
        uuid: string;
        name: string;
        image_cover: string;
        image_logo_large: string;
        image_logo_medium: string;
        logo: string;
        slug: string;
        summary: string;
        description: string;
        type_primary: number;
        type_secondary: number;
    };
    locations: any[];
    question_group: any;
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
}