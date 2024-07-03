import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Markdown from 'src/components/markdown';

import { INPFJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  job: INPFJobProps;
};

export default function JobDetailsSummary({ job }: Props) {
  const { skills, content } = job;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      <Stack spacing={3}>
        <Typography variant="h5">Job Skills</Typography>

        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
