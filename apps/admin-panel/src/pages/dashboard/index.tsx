import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    DashboardIcon
} from 'assets-ui';
import Reports from './components/reports';
import AdminNotifications from './components/adminNotifications';
import TopPerforming from './components/topPerforming';

const DashboardPage = () => {
    return (
        <Stack>
            <DashboardIcon style={{ width: 54, height: 54 }} />
            <Typography variant={'h1'} pb={'24px'}>Dashboard</Typography>
            <Reports />
            <AdminNotifications />
            <TopPerforming />
        </Stack>
    );
};

export default DashboardPage;