import Stack from '@mui/material/Stack';

import SocialTopClients from './topClients';
import TopMedia from './topMedia';

const SocialNetworkTab = () => {
    return (
        <Stack
            pt={'24px'}
        >
            <TopMedia />
            <SocialTopClients />
        </Stack>
    );
};

export default SocialNetworkTab;