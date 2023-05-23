import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const TopEarners = () => {
    return (
        <Stack gap={'16px'}>
            <Typography
                variant={'h1'}
                fontSize={17}
                fontWeight={500}
            >
                Top 3 Earners
            </Typography>

            <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                bgcolor={'rgba(45, 172, 194, 0.1)'}
                borderRadius={'25px'}
                p={'18px 32px'}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'flex-end'}
                    gap={'47px'}
                >

                    <Stack gap={'16px'}>
                        <Typography
                            variant={'h1'}
                        >
                            1
                        </Typography>

                        <Typography
                            variant={'h1'}
                            fontSize={18}
                            fontWeight={500}
                        >
                            Randy Calzoni
                        </Typography>

                        <Typography
                            fontSize={14}
                            fontWeight={500}
                            variant={'h1'}
                        >
                            2,423
                            <Typography
                                component={'span'}
                                fontSize={12}
                                fontWeight={400}
                                variant={'h1'}
                                pl={'4px'}
                            >
                                points
                            </Typography>
                        </Typography>
                    </Stack>

                    <Avatar
                        alt={'employee'}
                        src={'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427'}
                        sx={{
                            width: 36,
                            height: 36,
                        }}
                    />

                </Stack>

                <Divider flexItem={true} variant={'fullWidth'} orientation={'vertical'} />

                <Stack
                    flexDirection={'row'}
                    alignItems={'flex-end'}
                    gap={'47px'}
                >

                    <Stack gap={'16px'}>
                        <Typography
                            variant={'h1'}
                        >
                            2
                        </Typography>

                        <Typography
                            variant={'h1'}
                            fontSize={18}
                            fontWeight={500}
                        >
                            Adison Dorwart
                        </Typography>

                        <Typography
                            fontSize={14}
                            fontWeight={500}
                            variant={'h1'}
                        >
                            2,100
                            <Typography
                                component={'span'}
                                fontSize={12}
                                fontWeight={400}
                                variant={'h1'}
                                pl={'4px'}
                            >
                                points
                            </Typography>
                        </Typography>
                    </Stack>

                    <Avatar
                        alt={'employee'}
                        src={'https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera.jpg?ver=6'}
                        sx={{
                            width: 36,
                            height: 36,
                        }}
                    />

                </Stack>

                <Divider flexItem={true} variant={'fullWidth'} orientation={'vertical'} />

                <Stack
                    flexDirection={'row'}
                    alignItems={'flex-end'}
                    gap={'47px'}
                >

                    <Stack gap={'16px'}>
                        <Typography
                            variant={'h1'}
                        >
                            3
                        </Typography>

                        <Typography
                            variant={'h1'}
                            fontSize={18}
                            fontWeight={500}
                        >
                            Anika Gouse
                        </Typography>

                        <Typography
                            fontSize={14}
                            fontWeight={500}
                            variant={'h1'}
                        >
                            1,900
                            <Typography
                                component={'span'}
                                fontSize={12}
                                fontWeight={400}
                                variant={'h1'}
                                pl={'4px'}
                            >
                                points
                            </Typography>
                        </Typography>
                    </Stack>

                    <Avatar
                        alt={'employee'}
                        src={'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}
                        sx={{
                            width: 36,
                            height: 36,
                        }}
                    />

                </Stack>

            </Stack>
        </Stack>
    );
};

export default TopEarners;