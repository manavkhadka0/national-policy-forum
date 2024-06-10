import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'next-share';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

import Iconify from '../iconify';

const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    component: FacebookShareButton,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    component: LinkedinShareButton,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
    component: TwitterShareButton,
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    icon: 'formkit:whatsapp',
    color: '#25D366',
    component: WhatsappShareButton,
  },
  {
    value: 'email',
    label: 'Email',
    icon: 'carbon:email',
    color: '#ff5722',
    component: EmailShareButton,
  },
];

type ShareProps = {
  quote?: string;
  hashtag?: string;
  url?: string;
  longButtons?: boolean;
};

export default function Share({ url, hashtag, quote, longButtons }: ShareProps) {
  return (
    <Stack spacing={1} direction="row">
      {_socials.map((social) => {
        const ShareComponent = social.component;
        return (
          <ShareComponent
            key={social.value}
            url={url || window.location.href}
            quote={quote}
            hashtag={hashtag}
          >
            {longButtons ? (
              <Button
                size="small"
                variant="outlined"
                startIcon={<Iconify icon={social.icon} />}
                sx={{
                  m: 0.5,
                  flexShrink: 0,
                  color: social.color,
                  borderColor: social.color,
                  '&:hover': {
                    borderColor: social.color,
                    bgcolor: alpha(social.color, 0.08),
                  },
                }}
              >
                {social.label}
              </Button>
            ) : (
              <Iconify
                icon={social.icon}
                sx={{
                  width: 32,
                  height: 32,
                }}
                color={social.color}
              />
            )}
          </ShareComponent>
        );
      })}
    </Stack>
  );
}
