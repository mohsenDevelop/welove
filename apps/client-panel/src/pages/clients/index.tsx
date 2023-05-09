import Stack from '@mui/material/Stack';

import {
    UserFillIcon
} from 'assets-ui';
import ClientsHeader from './components/ClientsHeader';
import ClientList from './components/ClientList';

const ClientsPage = () => {
    return (
        <Stack>
            <UserFillIcon style={{ width: 54, height: 54 }} />
            <ClientsHeader />
            <ClientList />
        </Stack>
    );
};

export default ClientsPage;