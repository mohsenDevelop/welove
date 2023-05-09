import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { UseAdminTheme } from '@hooks/useAdminTheme';
import {
    SidebarImg,
    StatisticsImg
} from 'assets-ui';
import { colorPalette } from 'ui';

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

            <Stack
                bgcolor={colorPalette.pink10}
                width={'100%'}
                pl={'78px'}
                pt={'45px'}
            >

                <Typography
                    variant={'h1'}
                    fontWeight={600}
                    fontSize={15}
                    pb={'12px'}
                >
                    Dashboard
                </Typography>

                <Stack
                    bgcolor={colorPalette.white}
                    padding={'15px 10px'}
                    width={'fit-content'}
                    sx={{

                        'svg > g.circle-item > path:nth-child(14)': {
                            fill: themeColors.hiresColor,
                        },
                        'svg > g.circle-item > path:nth-child(11)': {
                            fill: themeColors.applicationsColor,
                        },
                        'svg > g.circle-item > path:nth-child(18)': {
                            fill: themeColors.sharesColor,
                        },
                        'svg > g.circle-item > path:nth-child(23)': {
                            fill: themeColors.pointsColor,
                        },
                        'svg > rect:nth-child(3)': {
                            fill: themeColors.hiresColor,
                        },
                        'svg > rect:nth-child(6)': {
                            fill: themeColors.applicationsColor,
                        },
                        'svg > rect:nth-child(9)': {
                            fill: themeColors.sharesColor,
                        },
                        'svg > rect:nth-child(12)': {
                            fill: themeColors.pointsColor,
                        },
                    }}
                >
                    <StatisticsImg />
                </Stack>
            </Stack>
        </Stack >
    );
};

export default Template;