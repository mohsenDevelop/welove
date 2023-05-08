import Stack from '@mui/material/Stack';

import { UseAdminTheme } from '@hooks/useAdminTheme';
import { SidebarImg } from 'assets-ui';

const Template = () => {

    const { themeColors } = UseAdminTheme();

    return (
        <Stack
            flexDirection={'row'}
            borderBottom={'1px solid rgba(0,0,0,.15)'}
            py={'24px'}
        >
            <Stack
                width={240}
                pl={'14px'}
                bgcolor={themeColors.sidebarSecondaryColor}
                sx={{
                    'svg > path.item, path.title': {
                        fill: themeColors.sidebarTextColor,
                    },
                    'svg > g > path': {
                        fill: themeColors.sidebarTextColor,
                    },
                    'svg > g > path.news-icon, path.notif-icon': {
                        fill: 'unset',
                        stroke: themeColors.sidebarTextColor,
                    },
                }}
            >
                <SidebarImg />
            </Stack>
        </Stack >
    );
};

export default Template;