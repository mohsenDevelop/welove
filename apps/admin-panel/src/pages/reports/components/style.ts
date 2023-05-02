import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';

export const StyledMenu = styled(Menu)(() => ({
    '& .MuiPaper-root': {
        height: 'auto',
        boxShadow: '0px 1px 12px rgba(168, 168, 168, 0.58)',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        borderRadius: 20,
        marginTop: 12,
        padding: '34px 27px  25px 34px',
        '& ul': {
            padding: '0px'
        }
    }
}));