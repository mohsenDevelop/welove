import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper, colorPalette } from 'ui';
import Table from './Table';

const LatestJobs = () => {
    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 24px'
            }}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
                pb={'24px'}
            >
                <Typography
                    fontSize={17}
                    fontWeight={600}
                >
                    Latest Jobs
                </Typography>

                <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={colorPalette.pink200}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Show all
                </Typography>

            </Stack>

            <Table />

        </Paper>
    );
};

export default LatestJobs;