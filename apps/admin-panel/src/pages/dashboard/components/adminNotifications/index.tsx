import Stack from '@mui/material/Stack';

import { Paper, colorPalette } from 'ui';
import AdminNotifHeader from './AdminNotifHeader';
import NotifItems from './NotifItems';

const AdminNotifications = () => {
    return (
        <Paper
            sx={{ mt: '24px' }}
        >
            <Stack
                p={'40px 20px 24px 20px'}
            >
                <AdminNotifHeader />
                <NotifItems />
            </Stack>
        </Paper>
    );
};

export default AdminNotifications;