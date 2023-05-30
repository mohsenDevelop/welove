import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';

import {
    Tabs,
    colorPalette,
} from 'ui';
import AllJobsTab from './allJobsTab';
import ActiveJobs from './activeJobsTab';
import ExpireJobs from './expireJobsTab';

const renderTabs: { [key: string]: any } = {
    '1': <AllJobsTab />,
    '2': <ActiveJobs />,
    '3': <ExpireJobs />,
};

const JobsTabs = () => {

    const [tabValue, setTabValue] = useState<string>('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>
            <Stack
                flexDirection={'row'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08);'}
            >
                <Tabs
                    indicatecolor={colorPalette.pink200}
                    value={tabValue}
                    onChange={handleChangeTabs}
                >
                    <Tab value={'1'} label={'All Jobs (26)'} />
                    <Tab value={'2'} label={'Active jobs (13)'} />
                    <Tab value={'3'} label={'Expire jobs (13)'} />
                </Tabs>

            </Stack>
            {
                renderTabs[tabValue]
            }
        </Stack >
    );
};

export default JobsTabs;