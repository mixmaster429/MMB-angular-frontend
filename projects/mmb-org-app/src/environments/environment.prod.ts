export const environment = {
  production: true,
  mock: {
    domain: 'http://localhost:3000/api',
    remoteDomain: 'https://www.movemeback.com/api/v2',
    login: '/login/',
    fullResponse: 'response_type=full',
    applications: '/admin/applications',
    opportunities: '/admin/opportunities',
  },

  api: {
    domain: 'https://www.movemeback.com/api/v2',
    careers: {
      listing: '/organisation/career/listing/',
      applications: '/organisation/career/application/',
      interestedApplications: '/organisation/career/interest',
      feedback: '/organisation/career/application/feedback/',
      interestFeedback: '/organisation/career/interest/'
    }
  }
};