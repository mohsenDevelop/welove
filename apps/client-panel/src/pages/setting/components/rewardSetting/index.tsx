import Stack from '@mui/material/Stack';
import RewardSettings from './RewardSettings';
import ShareJob from './ShareJob';
import MinimumClaim from './MinimumClaim';
import InterviewStage from './interview';

const RewardSettingTab = () => {
    return (
        <Stack
            pt={'38px'}
        >
            <RewardSettings />
            <ShareJob />
            <InterviewStage />
            <MinimumClaim />
        </Stack>
    );
};

export default RewardSettingTab;