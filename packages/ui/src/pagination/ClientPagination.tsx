import { SxProps } from '@mui/material';
import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';

export interface ClientPaginationProps {
    page: number;
    count: number;
    sx?: SxProps
    onChange: (page: number) => void;
}

export const ClientPagination: FC<ClientPaginationProps> = ({ page, count, sx, onChange }) => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'row'}
            border={'1px solid #A8A8A8'}
            borderRadius={'68px'}
            width={132}
            height={44}
            gap={'8px'}
            sx={sx}
        >
            <IconButton
                onClick={page <= 1 ? () => { return; } : () => onChange(page - 1)}>
                <ArrowBackIosRounded sx={{ fontSize: 14 }} />
            </IconButton>

            <Typography fontSize={14} fontWeight={400}>{`Page ${page}`}</Typography>

            <IconButton
                onClick={page >= count ? () => { return; } : () => onChange(page + 1)}>
                <ArrowForwardIosRounded sx={{ fontSize: 14 }} />
            </IconButton>

        </Stack >
    );
};