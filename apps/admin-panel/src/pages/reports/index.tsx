import Stack from '@mui/material/Stack';

import {
    ReportFillIcon
} from 'assets-ui';
import ReportsHeader from './components/header';
import ReportsTab from './components/Tabs';

const ReprotsPage = () => {
    return (
        <Stack>
            <ReportFillIcon />
            <ReportsHeader />
            <ReportsTab />
        </Stack>
    );
};

export default ReprotsPage;