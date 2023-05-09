import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    DashboardFillIcon
} from 'assets-ui';
import Reports from './components/reports';
import AdminNotifications from './components/adminNotifications';
import TopPerforming from './components/topPerforming';

const DashboardPage = () => {
    return (
        <Stack>
            <DashboardFillIcon style={{ width: 54, height: 54 }} />
            <Typography variant={'h1'} p={'24px 0px'}>Dashboard</Typography>
            <Reports />
            <AdminNotifications />
            <TopPerforming />
        </Stack>
    );
};

export default DashboardPage;