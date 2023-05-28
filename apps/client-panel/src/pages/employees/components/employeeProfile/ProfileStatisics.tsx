import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import {
    colorPalette,
    Paper,
    StatisticsProgress
} from 'ui';

const ProfileStatisics = () => {
    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 25px 30px 20px'
            }}
        >
            <Typography
                fontSize={17}
                fontWeight={600}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
                pb={'24px'}
            >
                Statistics
            </Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                pt={'24px'}
            >

                <Stack gap={'24px'}>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'baseline'}
                        gap={'5px'}
                    >
                        <Box
                            width={12}
                            height={12}
                            borderRadius={'50%'}
                            sx={{
                                background: 'linear-gradient(180deg, #C54BC7 0%, #884EB9 100%)'
                            }}
                        />

                        <Box>

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Hires
                            </Typography>
                            <Typography
                                color={colorPalette.blue800}
                                fontSize={19}
                                fontWeight={700}
                            >
                                12
                            </Typography>

                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'baseline'}
                        gap={'5px'}
                    >
                        <Box
                            width={12}
                            height={12}
                            borderRadius={'50%'}
                            sx={{
                                background: 'linear-gradient(180deg, #D3F969 0%, #C2BE33 100%)'
                            }}
                        />

                        <Box>

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Applications
                            </Typography>
                            <Typography
                                color={colorPalette.blue800}
                                fontSize={19}
                                fontWeight={700}
                            >
                                N/A
                            </Typography>

                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'baseline'}
                        gap={'5px'}
                    >
                        <Box
                            width={12}
                            height={12}
                            borderRadius={'50%'}
                            sx={{
                                background: 'linear-gradient(180deg, #66D1E9 0%, #2DACC2 100%)'
                            }}
                        />

                        <Box>

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Shares
                            </Typography>
                            <Typography
                                color={colorPalette.blue800}
                                fontSize={19}
                                fontWeight={700}
                            >
                                416
                            </Typography>

                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'baseline'}
                        gap={'5px'}
                    >
                        <Box
                            width={12}
                            height={12}
                            borderRadius={'50%'}
                            sx={{
                                background: 'linear-gradient(180deg, #F6DC55 0%, #FFA600 100%)'
                            }}
                        />

                        <Box>

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                            >
                                Points
                            </Typography>
                            <Typography
                                color={colorPalette.blue800}
                                fontSize={19}
                                fontWeight={700}
                            >
                                719
                            </Typography>

                        </Box>
                    </Stack>

                </Stack>

                <Stack
                    gap={'2px'}
                    position={'relative'}
                    display={'inline-grid'}
                    width={88}
                    height={88}
                    alignItems={'center'}
                    justifyItems={'center'}
                    pt={'24px'}
                >

                    <Box
                        position={'absolute'}
                        width={88}
                        height={88}
                    >
                        <StatisticsProgress
                            size={88}
                            activeColor={'#C54BC7'}
                            activeValue={70}
                        />
                    </Box>

                    <Box
                        position={'absolute'}
                        width={72}
                        height={72}
                        borderRadius={'50%'}
                        border={`1px solid ${colorPalette.white}`}
                    >
                        <StatisticsProgress
                            size={70}
                            activeColor={'#D3F969'}
                            activeValue={40}
                        />
                    </Box>

                    <Box
                        position={'absolute'}
                        width={59}
                        height={59}
                        borderRadius={'50%'}
                        border={`1px solid ${colorPalette.white}`}
                    >
                        <StatisticsProgress
                            size={57}
                            activeColor={'#66D1E9'}
                            activeValue={50}
                        />
                    </Box>
                    <Box
                        position={'absolute'}
                        width={45}
                        height={45}
                        borderRadius={'50%'}
                        border={`1px solid ${colorPalette.white}`}
                    >
                        <StatisticsProgress
                            size={43}
                            activeColor={'#F6DC55'}
                            activeValue={50}
                        />
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default ProfileStatisics;