import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import { colorPalette } from '../colors';

export const TextArea = styled(MuiTextField)(() => ({
    '& .MuiInputBase-root': {
        fontSize: 16,
        color: colorPalette.black,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid rgba(0, 0, 0, 0.43)',
            borderRadius: 8,
        },
        // '&:hover fieldset': {
        //     borderColor: 'inherit'
        // },
        '&.Mui-focused fieldset': {
            borderColor: colorPalette.green300,
        },
    },
}));