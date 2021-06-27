// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mock: {
    domain: 'http://localhost:3000/api',
    remoteDomain: 'https://www.african100.com/api/v2',
    login: '/login/',
    fullResponse: 'response_type=full',
    applications: '/admin/applications',
    opportunities: '/admin/opportunities',
  },

  api: {
    domain: 'https://www.african100.com/api/v2',
    careers: {
      listing: '/organisation/career/listing/',
      applications: '/organisation/career/application/',
      interestedApplications: '/organisation/career/interest',
      feedback: '/organisation/career/application/feedback/',
      interestFeedback: '/organisation/career/interest/'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
