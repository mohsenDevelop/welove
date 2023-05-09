import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Paper } from 'ui';

const Statistics = () => {
    return (
        <Paper
            sx={{ height: 174, flex: 2 }}
        >
            <Stack
                p={'30px 30px 0px 20px'}
            >
                <Typography
                    variant={'h1'}
                    fontSize={17}
                    fontWeight={600}
                    pb={'34px'}
                >
                    Statistics
                </Typography>

                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                >
                    <Box
                        display={'flex'}
                        alignItems={'flex-start'}
                        gap={'5px'}
                    >
                        <Box
                            height={12}
                            width={12}
                            borderRadius={'50%'}
                            sx={{ background: 'linear-gradient(180deg, #C54BC7 0%, #884EB9 100%)' }}
                        />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'14px'}
                            mt={'-4px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Hires
                            </Typography>

                            <Typography
                                variant={'h1'}
                                fontSize={19}
                                fontWeight={700}
                            >
                                12
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        display={'flex'}
                        alignItems={'flex-start'}
                        gap={'5px'}
                    >
                        <Box
                            height={12}
                            width={12}
                            borderRadius={'50%'}
                            sx={{ background: 'linear-gradient(180deg, #D3F969 0%, #C2BE33 100%)' }}
                        />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'14px'}
                            mt={'-4px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Applications
                            </Typography>

                            <Typography
                                variant={'h1'}
                                fontSize={19}
                                fontWeight={700}
                            >
                                N/A
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        display={'flex'}
                        alignItems={'flex-start'}
                        gap={'5px'}
                    >
                        <Box
                            height={12}
                            width={12}
                            borderRadius={'50%'}
                            sx={{ background: 'linear-gradient(180deg, #66D1E9 0%, #2DACC2 100%);' }}
                        />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'14px'}
                            mt={'-4px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Shares
                            </Typography>

                            <Typography
                                variant={'h1'}
                                fontSize={19}
                                fontWeight={700}
                            >
                                416
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        display={'flex'}
                        alignItems={'flex-start'}
                        gap={'5px'}
                    >
                        <Box
                            height={12}
                            width={12}
                            borderRadius={'50%'}
                            sx={{ background: 'linear-gradient(180deg, #F6DC55 0%, #FFA600 100%);' }}
                        />

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'14px'}
                            mt={'-4px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Points
                            </Typography>

                            <Typography
                                variant={'h1'}
                                fontSize={19}
                                fontWeight={700}
                            >
                                719
                            </Typography>
                        </Box>
                    </Box>

                </Stack>
            </Stack>

        </Paper>
    );
};

export default Statistics;