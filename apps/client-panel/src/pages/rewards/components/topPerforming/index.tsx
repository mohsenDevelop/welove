import { Paper } from 'ui';
import TopPerformHeader from './TopPerformHeader';
import Table from './Table';

const TopPerforming = () => {
    return (
        <Paper
            sx={{ mt: '24px', p: '30px 24px' }}
        >
            <TopPerformHeader />
            <Table />
        </Paper>
    );
};

export default TopPerforming;