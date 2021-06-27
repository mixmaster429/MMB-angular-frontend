import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'careers',
        title: 'Careers',
        type: 'group',
        children: [
            {
                id: 'careers',
                title: 'Applications',
                type: 'item',
                icon: 'work',
                url: '/careers/applications',
            },
            {
                id: 'interested',
                title: 'Interests',
                type: 'item',
                icon: 'stars',
                url: '/careers/interests',
            }
        ]
        // children: [
            // {
            //     id: 'home',
            //     title: 'Home',
            //     type: 'item',
            //     icon: 'home',
            //     url  : '/organization'
            // },
            // {
            //     id: 'opportunities',
            //     title: 'My Opportunities',
            //     type: 'item',
            //     icon: 'ballot',
            //     url  : '/opportunities'
            // },
           
            // {
            //     id: 'applications',
            //     title: 'My Applications',
            //     type: 'item',
            //     icon: 'apps',
            //     url  : '/applications'
            // },
            // {
            //     id: 'reports',
            //     title: 'Reports',
            //     type: 'item',
            //     icon: 'bar_chart',
            //     url  : '/reports'
            // }
        // ]
    }
];
