import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface BioProps {
    img: string,
    fullName: string,
    type: string,
    location: string,
}

const Bio: FC<BioProps> = ({
    img,
    fullName,
    type,
    location,
}) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            gap={'8px'}
            pb={'16px'}
        >
            <Box
                width={'52px'}
                height={'52px'}
                borderRadius={'50%'}
                component={'img'}
                src={img ?? ''}
                sx={{
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'8px'}
            >
                <Typography fontSize={16} fontWeight={500}>{fullName ?? ''}</Typography>
                <Typography fontSize={14} fontWeight={400}>{`${type ?? ''} - ${location ?? ''}`}</Typography>
            </Box>
        </Stack>
    );
};

export default Bio;