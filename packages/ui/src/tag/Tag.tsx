import { FC } from 'react';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { colorPalette } from '../colors';

export interface TapProps {
    type: 'success' | 'reject',
    sx?: SxProps
}

export const Tag: FC<TapProps> = ({ type, sx }) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            height={36}
            width={102}
            borderRadius={'84px'}
            border={`1px solid ${type === 'success' ? 'rgba(4, 119, 16, 0.34)' : 'rgba(219, 31, 53, 0.2)'}`}
            bgcolor={type === 'success' ? 'rgba(4, 119, 16, 0.2)' : 'rgba(219, 31, 53, 0.2)'}
            sx={sx}
        >
            {
                type === 'success' ? <CheckOutlinedIcon sx={{ color: colorPalette.green600 }} /> : <CloseOutlinedIcon sx={{ color: colorPalette.red100 }} />
            }
            <Typography
                fontSize={14}
                fontWeight={500}
                color={type === 'success' ? colorPalette.green600 : colorPalette.red100}
            >
                {type === 'success' ? 'Accept' : 'Reject'}
            </Typography>
        </Stack>
    );
};