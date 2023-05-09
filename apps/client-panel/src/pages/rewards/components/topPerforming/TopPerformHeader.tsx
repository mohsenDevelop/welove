import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    Button,
    colorPalette,
} from 'ui';
import { REWARD_CLEINT_URL } from '@config/urls';

const TopPerformHeader = () => {

    const navigate = useNavigate();

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
                    onClick={() => navigate(REWARD_CLEINT_URL)}
                >
                    Show all
                </Button>
            </Box>
        </Stack>
    );
};

export default TopPerformHeader;