import type { ProfileMenu } from '../Types/generalTypes';

import manageAccountIcon from '../assets/icons/user.svg';

export const profileMenu: ProfileMenu[] = [
  {
    id: 1,
    name: 'Manage Account',
    link: '/dashboard/manage-account',
    icon: manageAccountIcon,
  },
];

export const navigationItems = [
  {
    id: 1,
    title: 'About',
    link: '#about',
  },
  {
    id: 2,
    title: 'Books',
    link: '#books',
  },
  {
    id: 3,
    title: 'How it works',
    link: '#how-it-works',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
  },
];
