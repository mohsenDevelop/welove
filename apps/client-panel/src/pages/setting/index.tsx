import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';

import {
    Tabs,
    colorPalette,
} from 'ui';
import MyAccountTab from './components/myAccount';
import PushNotifsTab from './components/pushNotifs';
import AdminsTab from './components/admins';
import TermsConditionTab from './components/termsCondition';

const TabsPage: { [key: string]: any } = {
    '1': <MyAccountTab />,
    '2': <PushNotifsTab />,
    '3': <TermsConditionTab />,
    '4': <AdminsTab />,
    '5': <MyAccountTab />,
};

const SettingPage = () => {

    const [tabValue, setTabValue] = useState<string>('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>

            <Typography variant={'h1'} p={'24px 0px'}>Leaderboard</Typography>

            <Stack
                flexDirection={'row'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08);'}
            >
                <Tabs

                    indicatecolor={colorPalette.pink200}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'Reward Settings'} />
                    <Tab value={'2'} label={'Notifications'} />
                    <Tab value={'3'} label={'Terms & Conditions'} />
                    <Tab value={'4'} label={'Manage admins'} />
                    <Tab value={'5'} label={'My Account'} />
                </Tabs>

            </Stack>

            {
                tabValue ? TabsPage[tabValue] : null
            }
        </Stack>
    );
};

export default SettingPage;