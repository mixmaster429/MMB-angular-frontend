export const environment = {
  production: true,
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
