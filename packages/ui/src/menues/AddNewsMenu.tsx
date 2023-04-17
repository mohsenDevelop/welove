import { FC, MouseEvent } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { Button } from '../button/Button';
import { colorPalette } from '../colors';
import { StyledMenu } from './style';

export interface AddNewsMenuProps {
    title: string;
    btnBgcolor: string;
    menuHeight?: string;
    poperWidth?: string;
    children: any;
    open: boolean;
    anchorEl: null | HTMLElement;
    onClose: () => void;
    onOpen: (event: MouseEvent<any>) => void;
}

export const AddNewsMenu: FC<AddNewsMenuProps> = (
    {
        btnBgcolor,
        children,
        title,
        poperWidth,
        anchorEl,
        open,
        onClose,
        onOpen
    }
) => {
    return (
        <div>
            <Button
                id='role-news-more-button'
                aria-controls={open ? 'role-news-more-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant={'contained'}
                backgroundColor={btnBgcolor}
                LabelColor={colorPalette.white}
                startIcon={<AddOutlinedIcon />}
                endIcon={open ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
                sx={{
                    height: 48,
                    fontWeight: 700
                }}
                onClick={onOpen}
            >
                {title}
            </Button>

            <StyledMenu
                id='role-news-more-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '.MuiMenu-paper': { width: poperWidth }
                }}
            >
                {children}

            </StyledMenu>
        </div>
    );
};

AddNewsMenu.defaultProps = {
    poperWidth: '271px',
};

export default AddNewsMenu;