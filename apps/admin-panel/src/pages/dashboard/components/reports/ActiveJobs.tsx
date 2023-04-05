import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';

import { Paper, colorPalette } from 'ui';

const ActiveJobs = () => {
    return (
        <Paper
            sx={{ height: 174, flex: 1 }}
        >
            <Stack
                height={'100%'}
                p={'0px 20px'}
                justifyContent={'center'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'0px 5px'}
                >
                    <Typography variant={'h1'} fontSize={17} fontWeight={600}>Active Jobs</Typography>
                    <Box
                        height={28}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        bgcolor={'rgba(67, 218, 136, 0.2)'}
                        borderRadius={'98px'}
                    >
                        <Typography fontSize={12} fontWeight={400}> last month</Typography>
                        <NorthOutlinedIcon sx={{ color: colorPalette.green200, width: 17, height: 17 }} />
                        <Typography fontSize={14} fontWeight={500}>0.4%</Typography>
                    </Box>
                </Box>

                <Typography
                    variant={'h1'}
                    fontSize={34}
                    fontWeight={700}
                    pt={'9px'}
                >
                    1035
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                    pt={'9px'}
                    sx={{ opacity: .5 }}
                >
                    Lorem ipsum
                </Typography>
            </Stack>
        </Paper>
    );
};

export default ActiveJobs;