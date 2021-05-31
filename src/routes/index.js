export const routes = [
    {
        path: '/',
        redirect: {
            name: 'Code'
        }
    },
    {
        path: '/github',
        name: 'Github',
        component: () => import('../views/Github.vue'),
        children: [
            {
                path: '',
                redirect: {
                    name: 'Code'
                }
            },
            {
                path: 'code',
                name: 'Code',
                component: () => import('../components/github/Code.vue')
            },
            {
                path: 'issues',
                name: 'Issues',
                component: () => import('../components/github/Issues.vue')
            },
            {
                path: 'pulls',
                name: 'Pulls',
                component: () => import('../components/github/Pulls.vue')
            },
            {
                path: 'discussions',
                name: 'Discussions',
                component: () => import('../components/github/Discussions.vue')
            },
            {
                path: 'actions',
                name: 'Actions',
                component: () => import('../components/github/Actions.vue')
            },
            {
                path: 'security',
                name: 'Security',
                component: () => import('../components/github/Security.vue')
            },
            {
                path: 'insights',
                name: 'Insights',
                component: () => import('../components/github/Insights.vue')
            }
        ]
    },
    {
        path: '/telegram',
        name: 'Telegram',
        component: () => import('../Views/Telegram.vue')
    }
]
