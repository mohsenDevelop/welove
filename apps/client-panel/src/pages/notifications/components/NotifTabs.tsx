import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';

import {
    Tabs,
    colorPalette,
} from 'ui';
import SuperAdminTab from './superAdmin';
import ReminderTab from './reminder';
import VoucherClaimTab from './voucherClaim';
import PendingPointTab from './pendingPoint';
import AppUsersTab from './appUsers';

const renderTabs: { [key: string]: any } = {
    '1': <SuperAdminTab />,
    '2': <ReminderTab />,
    '3': <VoucherClaimTab />,
    '4': <PendingPointTab />,
    '5': <AppUsersTab />,
};

const NotifTabs = () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack
            gap={'38px'}
        >
            <Stack
                flexDirection={'row'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08);'}
            >
                <Tabs
                    indicatecolor={colorPalette.pink200}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'Super admin (12)'} />
                    <Tab value={'2'} label={'Reminder (1)'} />
                    <Tab value={'3'} label={'Voucher claim (3)'} />
                    <Tab value={'4'} label={'Pending point (0)'} />
                    <Tab value={'5'} label={'App users (0)'} />
                </Tabs>
            </Stack>

            {
                renderTabs[tabValue]
            }
        </Stack>
    );
};

export default NotifTabs;