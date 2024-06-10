import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { IOurTeamProps } from 'src/types/team';

import OurTeamItem from './our-team-item';

// ----------------------------------------------------------------------

type Props = {
    members: IOurTeamProps[];
};



export default function OurTeam({ members }: Props) {
    return (
        <Stack
            sx={{
                pt: { xs: 5, md: 10 },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    mx: 'auto',
                    maxWidth: 480,
                    textAlign: 'center',
                    mb: { xs: 8, md: 10 },
                }}
            >
                <Typography variant="h2">Our Team</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
                    ante odio sit amet eros.
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                }}
            >
                {members.map((member) => (
                    <OurTeamItem key={member.id} member={member} />
                ))}
            </Box>
        </Stack>
    );
}
