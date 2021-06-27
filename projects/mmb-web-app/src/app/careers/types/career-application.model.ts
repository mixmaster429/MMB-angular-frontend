/**
 * Model to be sent to api
 */
export class CareerApplication {
    id: string;
    career: number;
    status_candidate: number; // 1 for save and 2 for application
    status_candidate_date: string;
    status_candidate_note: string;
    compensation_currency_target: string;
    compensation_base_target: string;
    compensation_benefits_target: string;
    compensation_currency_current: string;
    compensation_base_current: string;
    compensation_benefits_current: string;
    compensation_notes: string;
    role_title_current: string;
    role_summary_current: string;
    role_country_current: string;
    role_city_custom_current: string;
    role_city_current: string;
    role_country_target: string;
    role_city_custom_target: string;
    role_city_target: string;
    cover_letter_file_name: string;
    cv_file_name: string;
}

/**
 * Career application get model - model received from api
 */
export class CareerApplicationGet {
    id: string;
    credentials: {
        professional_title: string;
        compensation_currency_current: string;
        compensation_base_current: number;
        compensation_benefits_current: number;
        compensation_currency_target: string;
        compensation_base_target: number;
        compensation_benefits_target: number;
    };
    details: {
        country_current: string;
        city_current: string;
        country_target: string;
        city_target: string;
        city_custom_current: string;
    };
}

export class LocationResource {
    name: string;
    value: number;
    resource_uri: string;
}

export class CurrencyResource {
    name: string;
    value: number;
    id: number;
}