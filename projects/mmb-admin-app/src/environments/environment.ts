// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mock: {
    domain: 'http://localhost:3000/api',
    remoteDomain: 'https://www.african100.com/api/v2/admin',
    login: '/user/login/',
    users: {
      all: '/users',
      details: '/user/profile',
      analytics: '/analytics',
      search: '/search/user/',
      assignToProjects: '/career/recruiter/project/candidate/bulk/'
    },
    projects: {
      all: '/career/recruiter/project/',
      candidate: '/career/recruiter/project/candidate',
    },
    fullResponse: 'response_type=full'
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
