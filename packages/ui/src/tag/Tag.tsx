import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface TagProps {
    mode: 'square' | 'circle',
    title: string,
    type: 'success' | 'fail' | 'video' | 'employee' | 'copy' | 'company',
    sx?: SxProps,
    Icon: ReactNode,
}

const typeBgColors = {
    'success': 'rgba(179, 252, 195, 0.4)',
    'fail': 'rgba(254, 200, 200, 0.4)',
    'employee': 'rgba(45, 172, 194, 0.15)',
    'company': 'rgba(45, 172, 194, 0.15)',
    'video': 'rgba(255, 166, 0, 0.15)',
    'copy': 'gba(136, 78, 185, 0.15)',
};

export const Tag: FC<TagProps> = ({ mode, title, type, Icon, sx }) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            gap={'4px'}
            bgcolor={typeBgColors[type]}
            borderRadius={mode === 'circle' ? '15px' : '6px'}
            p={'4px 8px'}
            sx={sx}
        >
            {Icon}
            <Typography
                fontSize={12}
                fontWeight={400}
            >
                {title}
            </Typography>
        </Stack>
    );
};

export default Tag;