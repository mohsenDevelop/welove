import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { colorPalette } from '../colors';

export const CustomPagination = styled(Pagination)({
    '& .MuiPaginationItem-text.MuiPaginationItem-rounded.Mui-selected.MuiPaginationItem-page': {
        backgroundColor: colorPalette.purple,
        color: colorPalette.white,
        borderRadius: '4px',
        width: 28,
        height: 28,
        fontWeight: 500,
    },
    '& .MuiPaginationItem-text.MuiPaginationItem-rounded.MuiPaginationItem-page': {
        fontSize: '14px',
        fontWeight: 400,
        color: colorPalette.blue800,
        width: 28,
        height: 28,
    }
});
