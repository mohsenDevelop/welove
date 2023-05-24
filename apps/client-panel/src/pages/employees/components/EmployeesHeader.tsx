import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    AddEmployeesMenu,
    colorPalette
} from 'ui';
import {
    FileUploadIcon,
    FolderUploadIcon
} from 'assets-ui';
const EmployeesHeader = () => {

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
            justifyContent={'space-between'}
        >
            <Typography variant={'h1'}>
                Employees
            </Typography>

            <AddEmployeesMenu
                title={'Upload Employee'}
                btnBgcolor={colorPalette.pink220}
                anchorEl={anchorEl}
                open={open}
                onOpen={handleClick}
                onClose={handleClose}
                poperWidth={'215px'}
            >
                <Stack
                    gap={'34px'}
                    p={'26px 40px 26px 16px'}
                >
                    <Stack
                        flexDirection={'row'}
                        gap={'12px'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <FolderUploadIcon />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'4px'}
                        // onClick={() => navigate(NEWS_URL_VIDOE_PHOTO_URL)}
                        >
                            <Typography
                                variant={'h1'}
                                fontSize={16}
                                fontWeight={500}
                            >
                                Bulk upload
                            </Typography>
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                via a.csv or excel
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        gap={'12px'}
                        sx={{ cursor: 'pointer' }}
                    >
                        <FileUploadIcon />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'4px'}
                        // onClick={() => navigate(NEWS_URL_COPY_ITEM_URL)}
                        >
                            <Typography
                                variant={'h1'}
                                fontSize={16}
                                fontWeight={500}
                            >
                                Individual upload
                            </Typography>
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                manual entry
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

            </AddEmployeesMenu>
        </Stack>
    );
};

export default EmployeesHeader;