import MuiSwitch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { colorPalette } from '../colors';

export const Switch = styled((props: SwitchProps) => (
    <MuiSwitch focusVisibleClassName='.Mui-focusVisible' disableRipple={true} {...props} />
))(({ theme }) => ({
    width: 44,
    height: 24,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(19px)',
            color: colorPalette.white,
            '& + .MuiSwitch-track': {
                backgroundColor: colorPalette.pink200,
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
        width: 20,
        height: 20,
    },
    '& .MuiSwitch-track': {
        borderRadius: 12,
        backgroundColor: colorPalette.gray70,
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));