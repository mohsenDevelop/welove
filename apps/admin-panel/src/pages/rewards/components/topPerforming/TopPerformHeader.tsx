import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    Button,
    colorPalette,
} from 'ui';

const TopPerformHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >
            <Typography
                fontSize={17}
                fontWeight={600}
                variant={'h1'}
            >
                Top Performing Companies
            </Typography>

            <Box
                display={'flex'}
                flexDirection={'row'}
                gap={'10px'}
            >

                <Button
                    variant={'outlined'}
                    borderColor={'rgba(39, 64, 82, 0.15)'}
                    LabelColor={colorPalette.purple}
                    sx={{
                        fontSize: 13,
                        fontWeight: 500
                    }}
                >
                    Show all
                </Button>
            </Box>
        </Stack>
    );
};

export default TopPerformHeader;