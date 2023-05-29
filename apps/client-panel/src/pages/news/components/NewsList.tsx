import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette, Tag, ClientPagination } from 'ui';
import { commonTypes } from '@models/common';

const NewsList = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <>
            <Stack
                pt={'44px'}
                gap={'16px'}
            >

                <Stack
                    border={'1px solid rgba(0, 0, 0, 0.08)'}
                    borderRadius={'12px'}
                    p={'20px'}
                    gap={'14px'}
                    bgcolor={colorPalette.white}
                >
                    <Stack
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                    >

                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'6px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={600}
                            >
                                Sean Ross
                            </Typography>

                            <Typography
                                component={'span'}
                                bgcolor={colorPalette.gray900}
                                padding={'1.5px'}
                                borderRadius={'50%'} />

                            <Tag
                                title={'Video or photos'}
                                type={'video'}
                                mode={'circle'}
                            />
                        </Box>

                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            sx={{ opacity: .5 }}
                        >
                            6 may
                        </Typography>
                    </Stack>

                    <Typography
                        fontSize={13}
                        fontWeight={400}
                        maxWidth={'80%'}
                        sx={{ opacity: .8 }}
                    >
                        Just registered! Lectus aenean: Sean Ross
                    </Typography>
                </Stack>

                <Stack
                    border={'1px solid rgba(0, 0, 0, 0.08)'}
                    borderRadius={'12px'}
                    p={'20px'}
                    gap={'14px'}
                    bgcolor={colorPalette.white}
                >
                    <Stack
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                    >

                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'6px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={600}
                            >
                                Sean Ross
                            </Typography>

                            <Typography
                                component={'span'}
                                bgcolor={colorPalette.gray900}
                                padding={'1.5px'}
                                borderRadius={'50%'} />

                            <Tag
                                title={'Copy item'}
                                type={'copy'}
                                mode={'circle'}
                            />
                        </Box>

                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            sx={{ opacity: .5 }}
                        >
                            6 may
                        </Typography>
                    </Stack>

                    <Typography
                        fontSize={13}
                        fontWeight={400}
                        maxWidth={'80%'}
                        sx={{ opacity: .8 }}
                    >
                        Just registered! Lectus aenean: Sean Ross
                    </Typography>
                </Stack>

            </Stack>

            <Stack
                alignItems={'flex-end'}
                pt={'33px'}
            >

                <ClientPagination
                    count={10}
                    page={filters.page ?? 1}
                    sx={{ bgcolor: colorPalette.white }}
                    onChange={(page: number) => {
                        setFilters((prev) => ({ ...prev, page: page }));
                    }}
                />

            </Stack>
        </>
    );
};

export default NewsList;