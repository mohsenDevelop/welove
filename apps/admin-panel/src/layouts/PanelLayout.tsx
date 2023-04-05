import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import { Container } from 'ui';
import Sidebar from './Sidebar';
import Header from './Header';

const PanelLayout = () => {
    return (
        <Stack
            flexDirection={'row'}
            height={'100vh'}
        >
            <Sidebar />

            <Stack flex={1}>
                <Header />
                <Container sx={{ height: 'calc(100% - 60px)', overflow: 'scroll', pb: '60px' }}>
                    <Outlet />
                </Container>
            </Stack>
        </Stack>

    );
};

export default PanelLayout;