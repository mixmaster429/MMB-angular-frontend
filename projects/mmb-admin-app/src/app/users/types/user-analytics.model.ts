export class UserAnalytics {
    shortlisting: ShortlistingAnalytics;
    visits: VisitsAnalytics;
    applications: ApplicationsAnalytics;
    profileSettings: ProfileSettings;
}

export class ShortlistingAnalytics {
    total: number;
    movemebackTeam: number;
    scores: AnalyticData[];
}

export class VisitsAnalytics {
    total: number;
    last6Months: number;
    recent: string[];
}

export class ApplicationsAnalytics {
    total: number;
    status: string;
    jobs: AnalyticData[];
}

export class ProfileSettings {
    current: string;
    target: string;
    currency: string;
    location: string;
}

export class AnalyticData {
    type: string;
    value: string;
    field: string;
}