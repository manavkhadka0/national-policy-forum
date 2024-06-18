import { paths } from 'src/routes/paths';

import { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Useful links',
    items: [
      { title: 'Home', path: paths.home },
      { title: 'Career', path: paths.marketing.services },
      { title: 'Donation', path: paths.marketing.services },
    ],
  },
  {
    order: '3',
    subheader: 'Articles',
    items: [
      { title: 'Blogs', path: paths.posts },
      { title: 'Publications', path: paths.publications },
      { title: 'Events', path: paths.events },
      { title: 'Careers', path: paths.careers },
      { title: 'Donation', path: paths.donations },
    ],
  },
  {
    order: '2',
    subheader: 'About',
    items: [
      { title: 'Organization', path: paths.eLearning.root },
      { title: 'Privacy Policy', path: paths.marketing.contact },
    ],
  },
  {
    order: '4',
    subheader: 'Our team',
    items: [
      { title: 'Advisory Board', path: paths.list },
      { title: 'Founders', path: paths.list },
      { title: 'Members', path: paths.list },
    ],
  },
  // {
  //   isNew: true,
  //   order: '5',
  //   subheader: 'E-commerce',
  //   items: [{ title: 'Landing', path: paths.eCommerce.root }],
  // },
  // {
  //   order: '6',
  //   subheader: 'Travel',
  //   items: [
  //     { title: 'Landing', path: paths.travel.root },
  //   ],
  // },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Pages',
    path: paths.pages,
    children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3], pageLinks[4], pageLinks[5]],
  },
  { title: 'Docs', path: paths.docs },
];
