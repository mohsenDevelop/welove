import { useNavigate, matchPath, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import { Logo } from 'assets-ui';
import { mainMenu, generalsMenu } from '@config/sidebarMenus';

const Sidebar = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);

    return (
        <Stack
            height={'100%'}
            width={240}
            bgcolor={colorPalette.blue900}
            p={'14px 16px 0px 14px'}
        >
            <Logo style={{ width: 105, height: 50 }} />

            <Stack
                pt={'34px'}
            >
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    pb={'6px'}
                    color={colorPalette.white}
                    sx={{ opacity: .5 }}
                >
                    MAIN MENU
                </Typography>

                {
                    mainMenu.map((_el) => (
                        <Box
                            key={_el.title}
                            display={'flex'}
                            alignItems={'center'}
                            height={44}
                            mb={'6px'}
                            pl={'15px'}
                            gap={'6px'}
                            sx={{
                                cursor: 'pointer',
                                bgcolor: match(_el.url) ? 'rgba(255, 255, 255, 0.08)' : 'inherit',
                                borderRadius: match(_el.url) ? '150px' : '0px',
                                '& p': {
                                    opacity: match(_el.url) ? 1 : .5
                                },
                                '& svg > g': {
                                    opacity: match(_el.url) ? 1 : .5
                                },
                                '& svg > g > path': {
                                    opacity: match(_el.url) ? 1 : .5,
                                    fill: '#fff'
                                },
                                ':hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '150px',
                                    '& p': {
                                        opacity: 1
                                    },
                                    '& svg > g': {
                                        opacity: 1
                                    }
                                }
                            }}
                            onClick={() => navigate(_el.url, { replace: true })}
                        >
                            <_el.icon />
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.white}
                                sx={{ opacity: .5 }}
                            >
                                {_el.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Stack>

            <Stack
                pt={'26px'}
            >
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    pb={'6px'}
                    color={colorPalette.white}
                    sx={{ opacity: .5 }}
                >
                    Others
                </Typography>

                {
                    generalsMenu.map((_el) => (
                        <Box
                            key={_el.title}
                            display={'flex'}
                            alignItems={'center'}
                            height={44}
                            mb={'6px'}
                            pl={'15px'}
                            gap={'6px'}
                            sx={{
                                cursor: 'pointer',
                                bgcolor: match(_el.url) ? 'rgba(255, 255, 255, 0.08)' : 'inherit',
                                borderRadius: match(_el.url) ? '150px' : '0px',
                                '& p': {
                                    opacity: match(_el.url) ? 1 : .5
                                },
                                '& svg > g': {
                                    opacity: match(_el.url) ? 1 : .5
                                },
                                '& svg > g > path': {
                                    opacity: match(_el.url) ? 1 : .5,
                                    fill: '#fff'
                                },
                                '& svg > path': {
                                    opacity: match(_el.url) ? 1 : .5
                                },
                                ':hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '150px',
                                    '& p': {
                                        opacity: 1
                                    },
                                    '& svg > g': {
                                        opacity: 1
                                    },
                                    '& svg > g > path': {
                                        opacity: 1,
                                        fill: '#fff'
                                    },
                                    '& svg > path': {
                                        opacity: 1
                                    }
                                }
                            }}
                            onClick={() => navigate(_el.url, { replace: true })}
                        >
                            <_el.icon />
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.white}
                                sx={{ opacity: .5 }}
                            >
                                {_el.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Stack>

        </Stack>
    );
};

export default Sidebar;