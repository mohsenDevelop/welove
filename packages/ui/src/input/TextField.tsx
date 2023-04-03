import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import { colorPalette } from '../colors';

export const MyTextField = styled(MuiTextField)(() => ({
    '& .MuiInputBase-root': {
        height: 54,
        fontSize: 14,
        color: colorPalette.gray900,
        '& input': {
            height: 28,
            paddingTop: '5px',
            paddingBottom: '5px',
            border: '1px solid #fff',
            borderRadius: 100,
            backgroundColor: `${colorPalette.white} !important`,
            '::placeholder': {
                color: colorPalette.gray900,
                opacity: .5
            }
        }
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid rgba(39, 64, 82, 0.25)',
            borderRadius: 17,
        },
        '&:hover fieldset': {
            borderColor: 'inherit'
        },
        '&.Mui-focused fieldset': {
            border: `1px solid ${colorPalette.gray900}`,

        },
    },
}));