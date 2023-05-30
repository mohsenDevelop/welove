import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import NotifTabs from './components/NotifTabs';

const NotificationsPage = () => {
    return (
        <Stack
        >
            <Typography variant={'h1'} p={'24px 0px'}>Notifications</Typography>
            <NotifTabs />

        </Stack>
    );
};

export default NotificationsPage;