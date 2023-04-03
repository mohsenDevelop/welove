import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import { colorPalette } from '../colors';

export const TextField = styled(MuiTextField)(() => ({
    '& .MuiInputBase-root': {
        height: 40,
        fontSize: 14,
        color: colorPalette.black,
        '& input': {
            height: 28,
            paddingTop: '5px',
            paddingBottom: '5px',
            border: '1px solid #fff',
            borderRadius: 100,
            backgroundColor: `${colorPalette.white} !important`,
            '::placeholder': {
                color: colorPalette.black,
            }
        }
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid #fff',
            borderRadius: 100,
        },
        '&:hover fieldset': {
            borderColor: 'inherit'
        },
        '&.Mui-focused fieldset': {
            border: `1px solid ${colorPalette.black}`,

        },
    },
}));