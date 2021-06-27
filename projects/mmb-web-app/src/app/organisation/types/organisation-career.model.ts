import { OrganisationLocation } from './organisation-location.model';

/**
 * Model to support career/job in organisation
 */
export class OrganisationCareer {
    organisation: number;
    title: string;
    summary: string;
    headline: string;
    criteria: string;
    benefits: string;
    description: string;
    locations: OrganisationLocation[];
    seniority: number;
}