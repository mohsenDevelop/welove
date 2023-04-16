import Stack from '@mui/material/Stack';

import RemindMe from './RemindMe';
import NotifList from './NotifList';

const PushNotifsTab = () => {
    return (
        <Stack pt={'24px'}>
            <RemindMe />
            <NotifList />
        </Stack>
    );
};

export default PushNotifsTab;