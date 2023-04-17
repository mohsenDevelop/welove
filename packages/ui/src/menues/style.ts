import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const StyledMenu = styled(Menu)(() => ({
    '& .MuiPaper-root': {
        height: 'auto',
        boxShadow: '0px 1px 12px rgba(168, 168, 168, 0.58)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        marginTop: 18
    }
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
    backgroundColor: 'transparent',
    height: 20,
    '&:hover': {
        backgroundColor: 'transparent'
    }
}));
