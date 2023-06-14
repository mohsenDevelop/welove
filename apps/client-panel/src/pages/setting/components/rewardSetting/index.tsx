import Stack from '@mui/material/Stack';

import RewardSettings from './RewardSettings';
import ShareJob from './ShareJob';
import MinimumClaim from './MinimumClaim';
import InterviewStage from './interview';
import OfferSetting from './offerSetting';

const RewardSettingTab = () => {
    return (
        <Stack
            pt={'38px'}
        >
            <RewardSettings />
            <ShareJob />
            <InterviewStage />
            <OfferSetting />
            <MinimumClaim />
        </Stack>
    );
};

export default RewardSettingTab;