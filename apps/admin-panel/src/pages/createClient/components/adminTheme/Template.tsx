import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { UseAdminTheme } from '@hooks/useAdminTheme';
import {
    SidebarImg,
    StatisticsImg,
    PendingPointsImg,
    LatestNewsImg,
    LatesJobsImg
} from 'assets-ui';
import { colorPalette, Button } from 'ui';

const Template = () => {

    const { themeColors } = UseAdminTheme();

    return (
        <Stack
            borderBottom={'1px solid rgba(0,0,0,.15)'}
            py={'24px'}
        >
            <Stack
                flexDirection={'row'}
                pb={'24px'}
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
                        'svg > path[fill="#E5167A"]': {
                            fill: themeColors.mainColor
                        },
                        'svg > rect[fill="#E5167A"]': {
                            fill: themeColors.mainColor
                        }
                    }}
                >
                    <SidebarImg />
                </Stack>

                <Stack
                    bgcolor={colorPalette.pink10}
                    width={'100%'}
                    p={'45px 0px 10px 78px'}
                    borderRadius={'0px 31px 31px 0px'}
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
                        border={'0.529167px solid rgba(0, 0, 0, 0.08)'}
                        boxShadow={'0px 0.529167px 6.35px rgba(168, 168, 168, 0.08)'}
                        borderRadius={'6px'}
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

                    <Stack
                        flexDirection={'row'}
                        pt={'12px'}
                        pr={'46px'}
                        gap={'12px'}
                    >

                        <Stack
                            flex={1}
                            bgcolor={colorPalette.white}
                            padding={'15px 10px'}
                            border={'0.529167px solid rgba(0, 0, 0, 0.08)'}
                            boxShadow={'0px 0.529167px 6.35px rgba(168, 168, 168, 0.08)'}
                            borderRadius={'6px'}
                            sx={{
                                'svg > path[fill="#E5167A"]': {
                                    fill: themeColors.mainColor
                                }
                            }}
                        >
                            <PendingPointsImg />
                        </Stack>

                        <Stack
                            flex={1}
                            bgcolor={colorPalette.white}
                            padding={'15px 10px'}
                            border={'0.529167px solid rgba(0, 0, 0, 0.08)'}
                            boxShadow={'0px 0.529167px 6.35px rgba(168, 168, 168, 0.08)'}
                            borderRadius={'6px'}
                            sx={{
                                'svg > path[fill="#E5167A"]': {
                                    fill: themeColors.mainColor
                                }
                            }}
                        >
                            <LatestNewsImg />
                        </Stack>

                    </Stack>

                    <Stack
                        mt={'12px'}
                        mr={'46px'}
                        bgcolor={colorPalette.white}
                        padding={'15px 10px'}
                        border={'0.529167px solid rgba(0, 0, 0, 0.08)'}
                        boxShadow={'0px 0.529167px 6.35px rgba(168, 168, 168, 0.08)'}
                        borderRadius={'6px'}
                        sx={{
                            'svg > path[fill="#E5167A"]': {
                                fill: themeColors.mainColor
                            }
                        }}
                    >
                        <LatesJobsImg />
                    </Stack>
                </Stack>

            </Stack>

            <Button
                variant={'contained'}
                type={'button'}
                backgroundColor={colorPalette.purple}
                LabelColor={colorPalette.white}
                sx={{ width: 190 }}
            >
                Save & Changes
            </Button>
        </Stack>
    );
};

export default Template;