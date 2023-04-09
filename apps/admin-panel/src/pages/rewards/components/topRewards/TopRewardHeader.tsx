import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    colorPalette
} from 'ui';
import {
    StarFillIcon
} from 'assets-ui';

const TopRewardHeader = () => {
    return (
        <Stack
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >
            <Stack
                flexDirection={'row'}
                gap={'16px'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={44}
                    height={44}
                    borderRadius={'6px'}
                    bgcolor={'rgba(136, 78, 185, 0.15)'}
                    sx={{
                        '& svg > path': {
                            fill: colorPalette.purple
                        }
                    }}
                >
                    <StarFillIcon style={{ width: 24, height: 24 }} />
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                >
                    <Typography
                        variant={'h1'}
                        fontSize={17}
                        fontWeight={600}
                    >
                        Top 5 Rewards
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        color={colorPalette.gray550}
                    >
                        Lorem ispum...
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    );
};

export default TopRewardHeader;