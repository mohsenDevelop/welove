import { Paper } from 'ui';
import TopRewardHeader from './TopRewardHeader';
import TopRewardList from './TopRewardList';

const TopRewards = () => {
    return (
        <Paper
            sx={{ mt: '24px', p: '30px 24px' }}
        >
            <TopRewardHeader />
            <TopRewardList />
        </Paper>
    );
};

export default TopRewards;