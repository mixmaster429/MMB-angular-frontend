export class UserDetails {
    coverImage: string;
    image: string;
    name: string;
    company: string;
    professional_title: string;
    location: string;
    first_name: string;
    last_name: string;
    profile_image: string;
    city_signup: string;
    country_signup: string;
    contact: {
        emails: {
            email: string;
        }
    };
    details: {
        city_signup: string;
        country_signup: string;
        user_pic_url: string;
        profile_image: string;
        profile_image_upload_name: string;
    };
    credentials: {
        professional_title: string;
        summary: string;
        uuid: string;
    };
    uuid: string;
}
