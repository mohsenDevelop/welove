import { FC, useState, MouseEvent, ReactNode, Children } from 'react';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { StyledMenu, StyledMenuItem } from './style';
import { colorPalette } from '../colors';

export interface TableMenuProps {
    children: ReactNode
}
export interface MenuItemProps {
    children: ReactNode,
    sx?: SxProps,
    onClick?: () => void
}

export const TableMenu: FC<TableMenuProps> = ({ children }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack>

            <IconButton
                id='role-table-more-button'
                aria-controls={open ? 'role-table-more-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                sx={{ width: 'fit-content' }}
                onClick={handleClick}
            >
                <MoreVertOutlinedIcon sx={{ color: colorPalette.blue920 }} />
            </IconButton>

            <StyledMenu
                id='role-table-more-menu'
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
                sx={{
                    '.MuiMenu-paper': { width: 215, mt: '-2px' }
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

                    {
                        Children.map(children, (child: ReactNode) => {
                            return (
                                <Stack
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    pl={'0px'}
                                    my={'15px'}
                                    onClick={handleClose}
                                >
                                    {child}
                                </Stack>
                            );
                        })
                    }

                </Stack>

            </StyledMenu>
        </Stack>
    );
};

export const MenuItem: FC<MenuItemProps> = ({ children, sx, onClick }) => {
    return (
        <StyledMenuItem onClick={onClick} sx={{ pl: '0px', width: '100%', ...sx }}>{children}</StyledMenuItem>
    );
};