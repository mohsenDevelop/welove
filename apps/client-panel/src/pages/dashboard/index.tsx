import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Statistics from './components/statistics';
import PendingPointes from './components/pendingPointes';
import LatestNews from './components/latestNews';
import LatestJobs from './components/latestJobs';

const DashboardPage = () => {
    return (
        <Stack gap={'24px'}>
            <Typography variant={'h1'} p={'24px 0px'}>Dashboard</Typography>
            <Statistics />

            <Stack
                display={'grid'}
                gridTemplateColumns={'repeat(2, 1fr)'}
                columnGap={'24px'}
            >
                <PendingPointes />
                <LatestNews />
            </Stack>

            <LatestJobs />

        </Stack>
    );
};

export default DashboardPage;