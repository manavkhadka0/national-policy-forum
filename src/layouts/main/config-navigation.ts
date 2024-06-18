import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Useful links',
    items: [
      { title: 'Career', path: paths.careers },
      { title: 'Donation', path: paths.donations },
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
      { title: 'Organization', path: paths.comingsoon },
      { title: 'Privacy Policy', path: paths.comingsoon },
      { title: 'Terms and conditions', path: paths.comingsoon },
    ],
  },
  {
    order: '4',
    subheader: 'Our team',
    items: [
      { title: 'Advisory Board', path: paths.teamByRole('Advisory Board') },
      { title: 'Founders', path: paths.teamByRole('Founder') },
      { title: 'Reseachers', path: paths.teamByRole('Researcher') },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {
    title: 'Pages',
    path: paths.pages,
    children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3]],
  },
  { title: 'Docs', path: paths.docs },
];
