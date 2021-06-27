export class MmbEvent {
    id: number;
    slug: string;
    title: string;
    location_summary: string;
    start_date: Date;
    end_date: Date;
    name: string;
    image_cover: string;
    created: Date;
    headline: string;
    website_redirect_url: string;
    summary: string;
    deadline_date: Date;
    theme: number;
    event_type: number;
    price: number;
    navigation: {
        next: string;
        previous: string;
    }
    organisation: {
        id: number;
        summary: string;
        name: string;
        image_cover: string;
        image_logo_large: string;
        image_logo_medium: string;
        logo: string;
        slug: string;
        description: string;
    }
    city: string;
    description: string;
    locations: {
        city: string;
        city_custom: string;
        country: string;
    };
    listing_type: string;
    eventreaction_set: [];
    comments: any[];
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
