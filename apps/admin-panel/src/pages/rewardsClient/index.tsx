import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BreadCrumb } from 'ui';
import { REWARD_CLEINT_URL } from '@config/urls';

const RewardsClient = () => {

    const navigate = useNavigate();

    return (
        <Stack>
            <BreadCrumb
                list={[
                    { link: '..', name: 'Rewards' },
                    { link: REWARD_CLEINT_URL, name: 'Rewards by clients' },
                ]}
                onClick={(link: string) => navigate(link)}
            />
            <Typography variant={'h1'} p={'12px 0px 24px 0px'}>Rewards by clients</Typography>
        </Stack>
    );
};

export default RewardsClient;