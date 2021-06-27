import { Career } from '../../shared/types/career.model';
import { MmbEvent } from '../../events/types/event.model';
import { Initiative } from '../../initiatives/types/initiative.model';

export class Organisation {
    id: number;
    uuid: string;
    cover: string;
    logo_small: string;
    name: string;
    followers_total: number;
    summary: string;
    description: string;
    website_url: string;
    careers: Career[];
    events: MmbEvent[];
    initiatives: Initiative[];
    slug: string;
    type_primary: number;
    city: {
        name: string;
    };
    country: {
        name: string;
    };
    industry: {
        industry_primary: number;
    };
    category: number;
    followed: {};
}
