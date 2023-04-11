import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';

import { SettingFillIcon } from 'assets-ui';
import {
    Tabs,
    colorPalette,
} from 'ui';
const SettingPage = () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>
            <SettingFillIcon />
            <Typography
                variant={'h1'}
                pt={'24px'}
                pb={'12px'}
                fontSize={14}
                fontWeight={600}
                sx={{ opacity: .7 }}
            >
                Super admin
            </Typography>
            <Typography variant={'h1'} pb={'24px'}>Settings</Typography>

            <Tabs
                indicateColor={colorPalette.purple}
                value={tabValue}
                onChange={handleChangeTabs}
            >
                <Tab value={'1'} label={'My Account'} />
                <Tab value={'2'} label={'Push notifications'} />
                <Tab value={'3'} label={'Admins'} />
                <Tab value={'4'} label={'Terms & conditions'} />
            </Tabs>
        </Stack>
    );
};

export default SettingPage;