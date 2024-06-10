import React from 'react';

import { Stack, IconButton } from '@mui/material';

import Iconify from '../iconify/iconify';

interface SocialLinksProps {
  socialLinks?: SocialLinksType;
}

type SocialLinkKeys = 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'whatsapp';

export interface SocialLinksType {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  whatsapp: string | null;
}

const socialIconMapping: Record<SocialLinkKeys, string> = {
  facebook: 'mdi:facebook',
  instagram: 'mdi:instagram',
  linkedin: 'mdi:linkedin',
  twitter: 'mdi:twitter',
  whatsapp: 'mdi:whatsapp',
};

const socialColorMapping: Record<SocialLinkKeys, string> = {
  facebook: '#3b5998',
  instagram: '#E1306C',
  linkedin: '#0077b5',
  twitter: '#1DA1F2',
  whatsapp: '#25D366',
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  if (!socialLinks) {
    return null;
  }
  return (
    <Stack direction="row">
      {Object.entries(socialLinks).map(([key, value]) => {
        if (value) {
          const iconKey = key as SocialLinkKeys;
          return (
            <IconButton
              key={iconKey}
              component="a"
              href={value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iconify
                icon={socialIconMapping[iconKey]}
                sx={{ color: socialColorMapping[iconKey] }}
              />
            </IconButton>
          );
        }
        return null;
      })}
    </Stack>
  );
};

export default SocialLinks;
