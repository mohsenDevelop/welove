import Stack from '@mui/material/Stack';

import {
    Paper
} from 'ui';
import TopPerformingHeader from './TopPerformingHeader';
import Table from './topPerformTabel/Table';

const TopPerforming = () => {
    return (
        <Paper
            sx={{ mt: '24px' }}
        >
            <Stack
                p={'40px 20px 24px 20px'}
            >
                <TopPerformingHeader />
                <Table />
            </Stack>
        </Paper>
    );
};

export default TopPerforming;