import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import Sidebar from './Sidebar';

const PanelLayout = () => {
    return (
        <Stack
            flexDirection={'row'}
            height={'100vh'}
        >
            <Sidebar />
            <Outlet />
        </Stack>

    );
};

export default PanelLayout;