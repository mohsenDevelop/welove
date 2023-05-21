import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Reports from './components/reports';
import AdminNotifications from './components/adminNotifications';
import TopPerforming from './components/topPerforming';
import Statistics from './components/statistics';

const DashboardPage = () => {
    return (
        <Stack gap={'24px'}>
            <Typography variant={'h1'} p={'24px 0px'}>Dashboard</Typography>
            <Statistics />
        </Stack>
    );
};

export default DashboardPage;