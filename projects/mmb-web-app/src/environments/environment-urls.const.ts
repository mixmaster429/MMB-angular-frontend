export const ENVIRONMENT_URLS = {
    api: {
        search: '/user/search/master/',
        careers: '/user/career/listing/',
        careersSearch: '/user/search/master/',
        careerDetails: '/user/career/listing/',
        companiesForm: '/public/sales/enquiry/',
        event: '/user/event/listing/',
        initiatives: '/user/initiative/listing/',
        feed: '/user/feed/home/',
        connectFeed: '/user/connect/request/',
        presignedUrl: '/utils/get_presigned_upload_url',
        public: {
            country: '/public/reference/type/country',
            region: '/public/reference/type/region',
            organisation: '/public/organisation/',
            city: '/public/reference/type/city',
            currency: '/public/reference/type/currency',
            skills: '/public/reference/type/skill/',
            languages: '/public/reference/type/language/',
            primaryFunctions: '/public/reference/type/function-primary',
            primaryIndustries: '/public/reference/type/industry-primary',
            secondaryIndustries: '/public/reference/type/industry-secondary',
        },
        user: {
            user: '/user/user/',
            profile: '/user/user/profile/',
            details: '/user/user/profile/detail/',
            credential: '/user/user/profile/credential/',
            phone: '/user/user/profile/contact/phone/',
            experience: '/user/user/profile/experience/',
            education: '/user/user/profile/education/',
            language: '/user/user/profile/language/',
            skill: '/user/user/profile/skill/',
            followOrg: '/user/organisation/follower/',
            followUser: '/user/profile/follower/user/',
            post: '/user/post/',
            article: '/user/article/',
        },
        organisation: {
            career: '/user/career/listing/',
            event: '/user/event/listing/',
            initiative: '/user/initiative/listing/',
            organisation: '/user/organisation/'
        },
        auth: {
            googleClientId: '722280505725-gdiegqm8dche8qmfbhvs71smso7vc6e8.apps.googleusercontent.com',
            login: '/login/',
            googleLogin: '/login/social/google/',
            register: '/register/',
            forgotPassword: '/password/reset/',
            resetPassword: '/password/reset/confirm/',
            logout: '/logout/'
        },
        career: {
            externalApply: '/user/career/application/external/',
            expressInterest: '/user/career/interest/event/',
            presignedUrl: '/storage/presigned/',
            bucket: 'african100-user',
            application: '/user/career/application/',
            credentials: '/user/user/profile/credential/',
            details: '/user/user/profile/detail/',
            reaction: '/user/career/reaction/',
            comment: '/user/career/comment/',
            save: '/user/career/save/',
            similar: '/user/career/similar/'
        },
        events: {
            register: '/user/event/application/external/',
            expressInterest: '/user/event/interest/event/',
            reaction: '/user/event/reaction/',
            comment: '/user/event/comment/',
            save: '/user/event/save/',
            similar: '/user/event/similar/'
        },
        initiative: {
            expressInterest: '/user/initiative/interest/event/',
            register: '/user/initiative/application/external/',
            reaction: '/user/initiative/reaction/',
            comment: '/user/initiative/comment/',
            save: '/user/initiative/save/',
            similar: '/user/initiative/similar/'
        },
        // wagtail api
        media: {
            mediaPage: '/user/content/pages/community/',
            pages: '/user/content/pages',
            domain: 'https://www.african100.com/api/v2',
            category: '/list/category',
            trending: '/user/content/list/category/trending/',
            reaction: '/user/content/pages/reaction/',
            comment: '/user/content/pages/comment/',
        },
        insight: {
            insightPage: '/user/content/pages/insight/',
            pages: '/pages',
            category: '/list/category',
            trending: '/user/content/list/category/trending/',
            reaction: '/user/content/pages/reaction/',
            comment: '/user/content/pages/comment/',
        },
        forum: {
            requests: '/user/forum/question/',
            comment: '/user/forum/question/comment/',
            answerComment: '/user/forum/answer/comment/',
            answerVote: '/user/forum/answer/vote/',
            vote: '/user/forum/question/vote/',
            responseAnswers: '/user/forum/answer/',
            newAnswer: '/user/forum/answer/',
            responses: '/user/forum/responses',
            reaction: '/user/forum/question/reaction/',
            answerReaction: '/user/forum/answer/reaction/',
            save: '/user/forum/save/'
        },
        opportunity: {
            requests: '/user/opportunity/',
            expressInterest: '/user/opportunity/interest/event/',
            responseAnswers: '/user/opportunity/comment/',
            newAnswer: '/opportunity/answer',
            responses: '/opportunity/responses',
            reaction: '/user/opportunity/reaction/',
            comment: '/user/opportunity/comment/',
            vote: '/user/opportunity/vote/',
            save: '/user/opportunity/save/',
            similar: '/user/opportunity/similar/'
        },
        onboarding: {
            setPassword: '/password/change/'
        },
        interest: {
            career: '/public/career/interest/event/',
            event: '/public/event/interest/event/',
            initiative: '/public/initiative/interest/event/',
            opportunity: '/public/opportunity/interest/event/',
        }
    },
}