import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import {
    colorPalette,
    Button,
    MenuItem
} from 'ui';
import {
    DisabledTableIcon,
    TrashTableIcon,
} from 'assets-ui';
import {
    EMPLOYEES_DELETE_URL,
    EMPLOYEES_DISABLED_URL,
    EMPLOYEES_PROFILE_POINT_URL
} from '@config/urls';

const StyledMenu = styled(Menu)(() => ({
    '& .MuiPaper-root': {
        height: 'auto',
        boxShadow: '0px 1px 12px rgba(168, 168, 168, 0.58)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        marginTop: 18
    }
}));

const MoreButton = () => {

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
        <div>
            <Button
                id='role-news-more-button'
                aria-controls={open ? 'role-news-more-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant={'outlined'}
                type={'button'}
                LabelColor={colorPalette.blue800}
                borderColor={colorPalette.blue800}
                sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    width: 130
                }}
                onClick={handleClick}
            >
                More
            </Button>

            <StyledMenu
                id='role-news-more-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                MenuListProps={{
                    'aria-labelledby': 'role-news-more-button',
                }}
                sx={{
                    '.MuiMenu-paper': { width: 215 }
                }}
            >

                <Stack
                    p={'10px 40px 0px 20px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={700}
                        color={colorPalette.blue800}
                        sx={{ opacity: .5 }}
                    >
                        More
                    </Typography>
                    <Divider
                        variant={'fullWidth'}
                        flexItem={true}
                        sx={{
                            mt: '11px',
                            mb: '16px'
                        }}
                    />

                    <Stack
                        gap={'24px'}
                        pb={'24px'}

                    >
                        <MenuItem
                            onClick={() => navigate(EMPLOYEES_PROFILE_POINT_URL)}
                        >
                            <AddOutlinedIcon sx={{ color: colorPalette.blue800 }} />
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={500}
                                pl={'10px'}
                            >

                                Add Point
                            </Typography>
                        </MenuItem>

                        <MenuItem
                            onClick={() => navigate(EMPLOYEES_DISABLED_URL)}
                        >
                            <DisabledTableIcon />
                            <Typography
                                variant={'h1'}
                                fontSize={14}
                                fontWeight={500}
                                pl={'10px'}
                            >

                                Disabled
                            </Typography>
                        </MenuItem>

                        <MenuItem
                            onClick={() => navigate(EMPLOYEES_DELETE_URL)}
                        >
                            <TrashTableIcon />
                            <Typography
                                color={colorPalette.red150}
                                fontSize={14}
                                fontWeight={500}
                                pl={'10px'}
                            >
                                Delete
                            </Typography>
                        </MenuItem>

                    </Stack>

                </Stack>
            </StyledMenu>
        </div>
    );
};

export default MoreButton;