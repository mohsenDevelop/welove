import Stack from '@mui/material/Stack';

import Statistics from './Statistics';
import ActiveJobs from './ActiveJobs';

const Reports = () => {
    return (
        <Stack
            flexDirection={'row'}
            gap={'15px'}
        >
            <Statistics />
            <ActiveJobs />
        </Stack>
    );
};

export default Reports;