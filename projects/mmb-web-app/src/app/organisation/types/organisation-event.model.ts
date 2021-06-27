import { TicketPrice } from './ticket-price.model';
import { OrganisationLocation } from './organisation-location.model';

/**
 * Model to support career/job in organisation
 */
export class OrganisationEvent {
    organisation: number;
    title: string;
    summary: string;
    headline: string;
    criteria: string;
    benefits: string;
    description: string;
    event_type: number;
    theme: number;
    price: number;
    locations: OrganisationLocation[];
    website_redirect_url: string;
    industries: [];
    tickets: TicketPrice[];
}
