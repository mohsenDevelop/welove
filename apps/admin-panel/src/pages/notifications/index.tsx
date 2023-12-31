import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    BellFillIcon
} from 'assets-ui';
import { colorPalette } from 'ui';
import NotifTabs from './components/NotifTabs';

const NotificationsPage = () => {
    return (
        <Stack
            sx={{
                '& svg > path': {
                    fill: colorPalette.black
                }
            }}
        >
            <BellFillIcon style={{ width: 54, height: 54 }} />
            <Typography variant={'h1'} p={'24px 0px'}>Notifications</Typography>

            <NotifTabs />
        </Stack>
    );
};

export default NotificationsPage;