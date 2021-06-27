import { UserDetails } from './helpers/user-details.model';
import { AnalyticsItem } from './helpers/analytics-item.model';
import { Experience } from './helpers/experience.model';
import { Education } from './helpers/education.model';

export class User {
    full_name: string;
    user_pic_temp_url: string;
    details: UserDetails;
    aboutMe: string;
    id: string;
    username: string;
    analyticsInfo: AnalyticsItem[];
    career: Experience[];
    profile_image: string;
    education: Education[];
    experiences: Experience[];
    skills: [];
    first_name: string;
    last_name: string;
    handle: string;
    languages: [];
    credentials: {
        professional_title: string;
        summary: string;
        uuid: string;
    };
}