import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

import { IOurTeamProps, ITeamMemberProps } from 'src/types/team';
import { Link } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
    ...bgGradient({
        startColor: alpha(theme.palette.grey[900], 0.88),
        endColor: alpha(theme.palette.grey[900], 0.88),
    }),
    top: 0,
    left: 0,
    zIndex: 8,
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
    }),
    '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

type Props = {
    member: IOurTeamProps;
};



export default function OurTeamItem({ member }: Props) {

    const _socials = [
        {
            value: 'facebook',
            label: 'FaceBook',
            icon: 'carbon:logo-facebook',
            color: '#1877F2',
            path: member.facebook
        },
        {
            value: 'instagram',
            label: 'Instagram',
            icon: 'carbon:logo-instagram',
            color: '#E02D69',
            path: member.instagram
        },
        {
            value: 'linkedin',
            label: 'Linkedin',
            icon: 'carbon:logo-linkedin',
            color: '#007EBB',
            path: member.linkedin
        },
        {
            value: 'twitter',
            label: 'Twitter',
            icon: 'carbon:logo-twitter',
            color: '#00AAEC',
            path: member.twitter
        },
    ];



    return (
        <Box sx={{ position: 'relative' }}>
            <StyledOverlay>
                <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        top: 0,
                        width: 1,
                        bottom: 0,
                        zIndex: 9,
                        m: 'auto',
                        position: 'absolute',
                        color: 'common.white',
                    }}
                >
                    <Typography variant="h6">{member.name}</Typography>

                    <Typography variant="body2" sx={{ opacity: 0.72, pb: 1 }}>
                        {member.role}
                    </Typography>

                    <Stack direction="row">
                        {_socials.map((social) => (
                            <Link component={RouterLink} href={social.path || '#'}>
                                <IconButton key={social.value} sx={{
                                    color: social.color
                                }}>
                                    <Iconify icon={social.icon} />
                                </IconButton>
                            </Link>
                        ))}
                    </Stack>
                </Stack>
            </StyledOverlay>

            <Image src={member.photo} alt={member.name} ratio="1/1" />
        </Box>
    );
}
