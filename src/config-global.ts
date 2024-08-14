// ----------------------------------------------------------------------

export const GOOGLE_MAP_API = process.env.NEXT_PUBLIC_MAP_API;
export const HOST_API =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_HOST_API_PROD
    : process.env.NEXT_PUBLIC_HOST_API_DEV;

export const FRONTEND_URL = 'https://nationalpolicyforum.com';

export const WEBSITE_CONFIG = {
  name: 'National Policy Forum',
  contact_email: 'nnpolicyforum@gmail.com',
  contact_phone2: '+977-9851319855',
  contact_address: 'Bharatpur, Chitwan, Nepal',
  socials: [
    {
      value: 'facebook',
      label: 'FaceBook',
      icon: 'carbon:logo-facebook',
      color: '#1877F2',
      link: 'https://www.facebook.com/profile.php?id=61555066314243',
    },
    {
      value: 'instagram',
      label: 'Instagram',
      icon: 'carbon:logo-instagram',
      color: '#E02D69',
      link: 'https://www.instagram.com/nnpolicyforum/',
    },
    {
      value: 'linkedin',
      label: 'Linkedin',
      icon: 'carbon:logo-linkedin',
      color: '#007EBB',
      link: ' https://www.linkedin.com/company/99445568/admin/feed/posts/',
    },
    {
      value: 'twitter',
      label: 'Twitter',
      icon: 'arcticons:x-twitter',
      color: '#00AAEC',
      link: 'https://twitter.com/nnpolicyforum',
    },
  ],
};
