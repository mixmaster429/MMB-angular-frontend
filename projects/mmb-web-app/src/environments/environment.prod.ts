// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ENVIRONMENT_URLS } from './environment-urls.const';

export const environment = {
  ...{
    sentryio: '',
    production: true,
    domain: 'https://www.movemeback.com/api/v2',
  },
  ...{ api: ENVIRONMENT_URLS.api }
}