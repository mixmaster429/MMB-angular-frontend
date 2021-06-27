import { OrganisationLocation } from './organisation-location.model';

/**
 * Model to support initiative in organisation
 */
export class OrganisationInitiative {
    organisation: number;
    title: string;
    summary: string;
    headline: string;
    criteria: string;
    benefits: string;
    description: string;
    initiative_type: number;
    theme: number;
    price: number;
    locations: OrganisationLocation[];
    website_redirect_url: string;
    // industries: [];
}