import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Statistics from './components/statistics';

const DashboardPage = () => {
    return (
        <Stack gap={'24px'}>
            <Typography variant={'h1'} p={'24px 0px'}>Dashboard</Typography>
            <Statistics />

            <Stack
                display={'grid'}
                gridTemplateColumns={'repeat(2, 1ft)'}
                columnGap={'24px'}
            >

            </Stack>

        </Stack>
    );
};

export default DashboardPage;