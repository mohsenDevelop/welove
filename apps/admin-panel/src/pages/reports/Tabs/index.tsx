import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';

import {
    Tabs,
    colorPalette,
} from 'ui';
import SocialNetworkTab from '../socialNetworkTab';
import PerformanceTab from '../performanceTab';

const ReportsTab = () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (

        <Stack
            pt={'34px'}
        >
            <Stack
                flexDirection={'row'}
            >

                <Tabs
                    indicatecolor={colorPalette.purple}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'Social Networks'} />
                    <Tab value={'2'} label={'Performance'} />
                </Tabs>

            </Stack>
            {
                tabValue === '1' ? <SocialNetworkTab /> : <PerformanceTab />
            }
        </Stack >
    );
};

export default ReportsTab;