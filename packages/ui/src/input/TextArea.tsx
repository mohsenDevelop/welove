import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import { colorPalette } from '../colors';

export const TextArea = styled(MuiTextField)(() => ({
    '& .MuiInputBase-root': {
        minHeight: 44,
        fontSize: 14,
        color: colorPalette.gray900,
        '& input': {
            '::placeholder': {
                color: colorPalette.gray900,
                opacity: .5
            },

        },
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
            border: `1.5px solid ${colorPalette.purple}`,

        },
    },
}));