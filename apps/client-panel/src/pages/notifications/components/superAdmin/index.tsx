import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette, Tag } from 'ui';

const SuperAdminTab = () => {
    return (
        <Stack
            gap={'10px'}
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
                            component={'span'}
                            bgcolor={colorPalette.pink200}
                            padding={'1.5px'}
                            borderRadius={'50%'} />

                        <Typography
                            fontSize={14}
                            fontWeight={600}
                        >
                            Title Placeholder
                        </Typography>

                        <Typography
                            component={'span'}
                            bgcolor={colorPalette.gray900}
                            padding={'1.5px'}
                            borderRadius={'50%'} />

                        <Tag
                            title={'Super admin'}
                            type={'company'}
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
                    fontSize={14}
                    fontWeight={400}
                    lineHeight={'22px'}
                    maxWidth={'90%'}
                    sx={{ opacity: .8 }}
                >
                    Lorem ipsum dolor sit amet consectetur. Volutpat velit condimentum ligula donec sagittis elit non in sed. Duis nunc fringilla non nulla sagittis. Ante tortor pellentesque placerat nunc varius vestibulum diam cursus.
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
                            component={'span'}
                            bgcolor={colorPalette.pink200}
                            padding={'1.5px'}
                            borderRadius={'50%'} />

                        <Typography
                            fontSize={14}
                            fontWeight={600}
                        >
                            Title Placeholder
                        </Typography>

                        <Typography
                            component={'span'}
                            bgcolor={colorPalette.gray900}
                            padding={'1.5px'}
                            borderRadius={'50%'} />

                        <Tag
                            title={'Super admin'}
                            type={'company'}
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
                    fontSize={14}
                    fontWeight={400}
                    lineHeight={'22px'}
                    maxWidth={'90%'}
                    sx={{ opacity: .8 }}
                >
                    Lorem ipsum dolor sit amet consectetur. Non sagittis cursus commodo etiam ornare congue porttitor non sed. Neque netus proin id nullam faucibus mi curabitur et. Massa imperdiet tellus sociis sapien tempor nunc lacus. Velit mattis tellus sit magna enim vel eleifend. Sit adipiscing lorem nisl risus volutpat vitae sem eget nisl. Diam in elementum aliquet convallis id aliquam leo. Dolor donec ultricies enim sapien. Ut netus venenatis blandit eu commodo nisi elit cursus. Egestas consectetur sem ac pretium sed platea vel egestas viverra.
                </Typography>
            </Stack>

        </Stack>
    );
};

export default SuperAdminTab;