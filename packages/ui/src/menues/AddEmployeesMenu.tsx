import { FC, MouseEvent } from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { Button } from '../button/Button';
import { colorPalette } from '../colors';
import { StyledMenu } from './style';

export interface AddEmployeesMenuProps {
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

export const AddEmployeesMenu: FC<AddEmployeesMenuProps> = (
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
                id='role-employees-more-button'
                aria-controls={open ? 'role-employees-more-button' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant={'contained'}
                backgroundColor={btnBgcolor}
                LabelColor={colorPalette.white}
                startIcon={<FileUploadOutlinedIcon />}
                endIcon={open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                sx={{
                    height: 48,
                    fontWeight: 700
                }}
                onClick={onOpen}
            >
                {title}
            </Button>

            <StyledMenu
                id='role-employees-more-menu'
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
                MenuListProps={{
                    'aria-labelledby': 'role-employees-more-button',
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

AddEmployeesMenu.defaultProps = {
    poperWidth: '271px',
};