import type { ProfileMenu } from '../Types/generalTypes'

import manageAccountIcon from '../Assets/Icons/user.svg'

export const profileMenu: ProfileMenu[] = [
  {
    id: 1,
    name: 'Manage Account',
    link: '/dashboard/manage-account',
    icon: manageAccountIcon,
  },
]

export const navigationItems = [
    {
        id: 1,
        title: 'Home',
        link: 'home',
    },
    {
        id: 2,
        title: 'About',
        link: 'about',
    },
    {
        id: 3,
        title: 'Testimonials',
        link: 'testimonials',
    },
    {
        id: 4,
        title: 'Products',
        link: 'products',
    },
    {
        id: 5,
        title: 'Channels',
        link: 'channels',
    },
    {
        id: 6,
        title: 'How It Works',
        link: 'how-it-works',
    },
]