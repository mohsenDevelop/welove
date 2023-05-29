import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    AddNewsMenu,
    colorPalette
} from 'ui';
import { CameraIcon, CardIcon, UserFillIcon } from 'assets-ui';
import { NEWS_URL_COPY_ITEM_URL, NEWS_URL_VIDOE_PHOTO_URL } from '@config/urls';

const NewsHeader = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'35px'}
        >
            <Typography
                variant={'h1'}
            >
                News
                <Typography
                    component={'span'}
                    variant={'h1'}
                    fontSize={16}
                    fontWeight={500}
                    pl={'4px'}
                >
                    (32)
                </Typography>
            </Typography>

            <AddNewsMenu
                title={'Add New Items'}
                btnBgcolor={colorPalette.pink220}
                anchorEl={anchorEl}
                open={open}
                poperWidth={'271px'}
                onOpen={handleClick}
                onClose={handleClose}
            >
                <Stack
                    gap={'34px'}
                    p={'26px 16px 26px 16px'}
                >
                    <Stack
                        flexDirection={'row'}
                        gap={'17px'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box
                            width={44}
                            height={44}
                            bgcolor={colorPalette.AquaBlue200}
                            borderRadius={'6px'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{
                                '& svg > path': {
                                    fill: colorPalette.white
                                }
                            }}
                        >
                            <UserFillIcon style={{ width: 24, height: 24 }} />
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'4px'}
                            onClick={() => navigate(NEWS_URL_VIDOE_PHOTO_URL)}
                        >
                            <Typography
                                variant={'h1'}
                                fontSize={15}
                                fontWeight={500}
                            >
                                Employee of the month
                            </Typography>
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                Lorem ipsum
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        gap={'17px'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box
                            width={44}
                            height={44}
                            bgcolor={colorPalette.orange120}
                            borderRadius={'6px'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{
                                '& svg > path': {
                                    fill: colorPalette.white
                                }
                            }}
                        >
                            <CameraIcon style={{ width: 24, height: 24 }} />
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'4px'}
                            onClick={() => navigate(NEWS_URL_VIDOE_PHOTO_URL)}
                        >
                            <Typography
                                variant={'h1'}
                                fontSize={15}
                                fontWeight={500}
                            >
                                Add Photo or video
                            </Typography>
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                Lorem ipsum
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        gap={'17px'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box
                            width={44}
                            height={44}
                            bgcolor={colorPalette.purple}
                            borderRadius={'6px'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{
                                '& svg > path': {
                                    fill: colorPalette.white
                                }
                            }}
                        >
                            <CardIcon style={{ width: 24, height: 24 }} />
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'4px'}
                            onClick={() => navigate(NEWS_URL_COPY_ITEM_URL)}
                        >
                            <Typography
                                variant={'h1'}
                                fontSize={15}
                                fontWeight={500}
                            >
                                Copy item
                            </Typography>
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                Lorem ipsum
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

            </AddNewsMenu>
        </Stack>
    );
};

export default NewsHeader;