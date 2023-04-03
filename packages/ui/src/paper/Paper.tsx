import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

import { colorPalette } from '../colors';

export interface PaperProps {
    children: ReactNode,
    sx?: SxProps
}

export const Paper: FC<PaperProps> = ({ children, sx }) => {
    return (
        <Box
            bgcolor={colorPalette.white}
            border={'1px solid rgba(0, 0, 0, 0.18)'}
            borderRadius={'12px'}
            sx={sx}
        >
            {
                children
            }

        </Box>
    );
};