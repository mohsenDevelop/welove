import Stack from '@mui/material/Stack';
import RewardSettings from './RewardSettings';
import ShareJob from './ShareJob';
import MinimumClaim from './MinimumClaim';

const RewardSettingTab = () => {
    return (
        <Stack
            pt={'38px'}
        >
            <RewardSettings />
            <ShareJob />
            <MinimumClaim />
        </Stack>
    );
};

export default RewardSettingTab;