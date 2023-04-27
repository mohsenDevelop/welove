import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import {
    Tabs,
    colorPalette,
    Button
} from 'ui';
import { NOTIFICATION_COMPOSE_URL } from '@config/urls';

const NotifTabs = () => {

    const navigate = useNavigate();

    const [tabValue, setTabValue] = useState('1');

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Stack>
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
                    <Tab value={'1'} label={'Active (12)'} />
                    <Tab value={'2'} label={'Archive (1)'} />
                </Tabs>

                <Button
                    variant={'contained'}
                    backgroundColor={colorPalette.purple}
                    LabelColor={colorPalette.white}
                    startIcon={
                        <EditOutlinedIcon
                            sx={{
                                width: 24,
                                height: 24,
                                '& path': {
                                    fill: `${colorPalette.white} !important`
                                }
                            }}
                        />
                    }
                    sx={{
                        width: 140,
                        height: 48,
                        fontWeight: 700
                    }}
                    onClick={() => navigate(NOTIFICATION_COMPOSE_URL)}
                >
                    Compose
                </Button>
            </Stack>
        </Stack>
    );
};

export default NotifTabs;