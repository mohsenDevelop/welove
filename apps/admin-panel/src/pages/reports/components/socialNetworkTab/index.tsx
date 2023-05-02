import Stack from '@mui/material/Stack';

import SocialTopClients from './topClients';
import TopMedia from './topMedia';
import TopNetwork from './topNetworks';

const SocialNetworkTab = () => {
    return (
        <Stack
            pt={'24px'}
        >
            <TopNetwork />
            <TopMedia />
            <SocialTopClients />
        </Stack>
    );
};

export default SocialNetworkTab;