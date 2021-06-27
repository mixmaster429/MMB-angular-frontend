/**
 * Application stage
 */
export enum APPLICATION_STAGE {
    Screening = 'Screening',
    ApplicationShortlist = 'Application Shortlist',
    ApplicationReject = 'Application Reject',
    ApplicationRedirect = 'Application Redirect',
    ApplicationFurtherReview = 'Application Further Review',
    ApplicationMoreInfo = 'Application More Info',
    ApplicationPause = 'Application Pause',
    ApplicationExpire = 'Application Expire',

    Shortlist = 'Shortlist',

    Interview = 'Interview',
    InterviewStart = 'Interview Start',
    InterviewFinal = 'Final Interview',
    InterviewProgress = 'Interview Progress',
    InterviewReject = 'Interview Reject',
    InterviewRedirect = 'Interview Redirect',
    InterviewPause = 'Interview Pause',

    FinalInterview = 'Final Interview',
    FinalInterviewReject = 'Final Interview Reject',
    FinalInterviewPause = 'Final Interview Pause',
    FinalInterviewRedirect = 'Final Interview Redirect',

    Offer = 'Offer',
    OfferNegotiate = 'Offer Negotiate',
    OfferWithdraw = 'Offer Withdraw',
    OfferPause = 'Offer Pause',
}