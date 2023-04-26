import Stack from '@mui/material/Stack';

import {
    UserFillIcon
} from 'assets-ui';
import ClientsHeader from './ClientsHeader';

const ClientsPage = () => {
    return (
        <Stack>
            <UserFillIcon style={{ width: 54, height: 54 }} />
            <ClientsHeader />
        </Stack>
    );
};

export default ClientsPage;