import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { WEBSITE_CONFIG } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ContactInfo() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Get In Touch
          </Typography>

          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
              </Stack>

              <Link color="inherit" variant="body2" href={`mailto:${WEBSITE_CONFIG.contact_email}`}>
                {WEBSITE_CONFIG.contact_email}
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
              </Stack>

              {/* <Typography variant="body2">{WEBSITE_CONFIG.contact_phone}</Typography> */}
              <Link color="inherit" variant="body2" href={`tel:${WEBSITE_CONFIG.contact_phone}`}>
                {WEBSITE_CONFIG.contact_phone}
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
              </Stack>

              <Typography variant="body2">{WEBSITE_CONFIG.contact_address}</Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Follow Us</Typography>
              <Stack direction="row">
                <Stack direction="row">
                  {WEBSITE_CONFIG.socials.map((social) => (
                    <Link
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.link}
                    >
                      <IconButton
                        key={social.value}
                        sx={{
                          color: social.color,
                        }}
                      >
                        <Iconify icon={social.icon} />
                      </IconButton>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2215.4964325176875!2d84.45110280584464!3d27.663164682953102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM5JzQ4LjEiTiA4NMKwMjcnMDcuOSJF!5e1!3m2!1sen!2snp!4v1719031083658!5m2!1sen!2snp"
            height="450"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
