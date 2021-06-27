import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        type: 'group',
        children: [
            {
                id: 'user',
                title: 'Users',
                type: 'collapsable',
                icon: 'account_circle',
                children: [
                    {
                        id   : 'usersManagement',
                        title: 'Management',
                        type : 'item',
                        url  : '/users/management'
                    },
                    // {
                    //     id   : 'advancedSearchUsers',
                    //     title: 'Advanced Search',
                    //     type : 'item',
                    //     url  : '/users/advanced-search'
                    // }
                ]
            },
            {
                id: 'organizations',
                title: 'Organizations',
                type: 'collapsable',
                icon: 'account_balance',
                children: [
                    {
                        id   : 'employeesManagement',
                        title: 'Employees',
                        type : 'item',
                        url  : '/organizations/employees'
                    },
                    {
                        id   : 'organizationsManagement',
                        title: 'Organizations',
                        type : 'item',
                        url  : '/organizations/all'
                    }
                ]
            },
            {
                id: 'sales',
                title: 'Sales',
                type: 'collapsable',
                icon: 'attach_money',
                children: [
                    {
                        id   : 'leads',
                        title: 'Leads',
                        type : 'item',
                        url  : '/sales/leads'
                    },
                    {
                        id   : 'organizationsManagement',
                        title: 'Opportunity',
                        type : 'item',
                        url  : '/sales/opportunity'
                    }
                ]
            },
            {
                id: 'careers',
                title: 'Careers',
                type: 'collapsable',
                icon: 'card_travel',
                children: [
                    {
                        id   : 'projectsManagement',
                        title: 'Projects',
                        type : 'item',
                        url  : '/projects'
                    },
                    {
                        id   : 'careersListing',
                        title: 'Listing',
                        type : 'item',
                        url  : '/careers/all'
                    },
                    {
                        id   : 'candidateShortlisting',
                        title: 'Candidate Shortlisting',
                        type : 'item',
                        url  : '/careers/shortlisting'
                    },
                    {
                        id   : 'applicationManagement',
                        title: 'Application Management',
                        type : 'item',
                        url  : '/careers/applications'
                    },
                    {
                        id   : 'advancedSearch',
                        title: 'Advanced Search',
                        type : 'item',
                        url  : '/careers/advanced-search'
                    }
                ]
            },
            {
                id: 'events',
                title: 'Events',
                type: 'collapsable',
                icon: 'event',
                children: [
                    {
                        id   : 'eventsListing',
                        title: 'Listing',
                        type : 'item',
                        url  : '/events/all'
                    },
                    {
                        id   : 'eventsManagement',
                        title: 'Management',
                        type : 'item',
                        url  : '/events/management'
                    }
                ]
            },
            {
                id: 'requestsManagement',
                title: 'Requests Management',
                type: 'collapsable',
                icon: 'question_answer',
                children: [
                    {
                        id   : 'requestsListing',
                        title: 'Listing',
                        type : 'item',
                        url  : '/requests/all'
                    },
                    {
                        id   : 'requestsManagement',
                        title: 'Management',
                        type : 'item',
                        url  : '/requests/management'
                    }
                ]
            },
        ]
    }
];
