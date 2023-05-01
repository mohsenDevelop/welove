import Stack from '@mui/material/Stack';

import {
    ReportFillIcon
} from 'assets-ui';
import ReportsHeader from './header';
import ReportsTab from './Tabs';

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