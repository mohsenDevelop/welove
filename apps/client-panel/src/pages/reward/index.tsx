import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';

import {
    Tabs,
    colorPalette,
    SortMenu,
} from 'ui';
import ToApproveTab from './components/toApproveTab';
import CompletedTab from './components/completedTab';
import ClaimsTab from './components/claimsTab';

const renderTabs: { [key: string]: any } = {
    '1': <ToApproveTab />,
    '2': <CompletedTab />,
    '3': <ClaimsTab />,
};

const RewardCompanyPage = () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>

            <Typography variant={'h1'} p={'24px 0px'}>Rewards</Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08);'}

            >
                <Tabs
                    indicatecolor={colorPalette.pink200}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'To Aprove (34)'} />
                    <Tab value={'2'} label={'Completed (134)'} />
                    <Tab value={'3'} label={'Claims (24)'} />
                </Tabs>
                <SortMenu />
            </Stack>

            {
                renderTabs[tabValue]
            }

        </Stack>
    );
};

export default RewardCompanyPage;