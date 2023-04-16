import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';

import {
    BreadCrumb,
    Tabs,
    colorPalette,
    SortMenu,
} from 'ui';
import {
    REWARD_CLEINT_URL,
    REWARD_COMPANY_URL,
    REWARD_URL
} from '@config/urls';
import ToApprove from './toApprove';
import Completed from './completed';

const RewardCompanyPage = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>

            <BreadCrumb
                list={[
                    { link: REWARD_URL, name: 'Rewards' },
                    { link: REWARD_CLEINT_URL, name: 'Rewards by clients' },
                    { link: REWARD_COMPANY_URL, name: `${searchParams.get('company') ?? ''}- Rewards` },
                ]}
                onClick={(link: string) => navigate(link)}
            />
            <Typography variant={'h1'} p={'12px 0px 24px 0px'}>{`${searchParams.get('company') ?? ''}- Rewards`}</Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Tabs
                    indicatecolor={colorPalette.purple}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'To Aprove (34)'} />
                    <Tab value={'2'} label={'Completed (134)'} />
                </Tabs>
                <SortMenu />
            </Stack>

            {
                tabValue === '1' ? <ToApprove /> : <Completed />
            }

        </Stack>
    );
};

export default RewardCompanyPage;