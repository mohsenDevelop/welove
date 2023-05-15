import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

import { colorPalette } from '../colors';

export interface PaperProps {
    children: ReactNode;
    sx?: SxProps;
    type?: 'admin' | 'client';
}

export const Paper: FC<PaperProps> = ({ children, sx, type }) => {
    return (
        <Box
            bgcolor={colorPalette.white}
            border={type === 'admin' ? '1px solid rgba(0, 0, 0, 0.18)' : '1px solid rgba(0, 0, 0, 0.08)'}
            borderRadius={'12px'}
            sx={sx}
        >
            {
                children
            }

        </Box>
    );
};

Paper.defaultProps = {
    type: 'admin'
};