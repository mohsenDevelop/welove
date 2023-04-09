import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    StarFillIcon
} from 'assets-ui';
import TopRewards from './components/topRewards';

const RewardsPage = () => {
    return (
        <Stack>
            <StarFillIcon />
            <Typography variant={'h1'} p={'24px 0px'}>Rewards</Typography>
            <TopRewards />
        </Stack>
    );
};

export default RewardsPage;