import { FC } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

import { colorPalette } from '../colors';

export interface BackButtonProps {
    onClick: (event: any) => void;
    sx?: SxProps
}

export const BackButton: FC<BackButtonProps> = ({ onClick, sx }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'6px'}
            bgcolor={colorPalette.white}
            border={'1px solid rgba(0, 0, 0, 0.1)'}
            borderRadius={'210px'}
            maxWidth={'90px'}
            height={'44px'}
            p={'0px 16px 0px 10px'}
            sx={{
                cursor: 'pointer',
                ...sx
            }}
            onClick={onClick}
        >
            <NavigateBeforeOutlinedIcon />
            <Typography
                fontSize={14}
                fontWeight={600}
                color={colorPalette.blue800}
            >
                Back
            </Typography>
        </Box>
    );
};