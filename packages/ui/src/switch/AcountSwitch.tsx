import MuiSwitch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { colorPalette } from '../colors';

export const AccountSwitch = styled((props: SwitchProps) => (
    <MuiSwitch focusVisibleClassName='.Mui-focusVisible' disableRipple={true} {...props} />
))(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: colorPalette.white,
            '& + .MuiSwitch-track': {
                backgroundColor: colorPalette.purple,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: colorPalette.white,
            boxShadow: 'unset'
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 12,
        height: 12,
    },
    '& .MuiSwitch-track': {
        borderRadius: 12,
        backgroundColor: 'rgba(4, 9, 33, 0.32)',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));