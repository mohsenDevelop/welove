import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { Paper, colorPalette } from 'ui';

const newsList = [
    {
        id: '1',
        companyName: 'Company name',
        title: 'Title name',
        date: '19 hours ago',
        desciption: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        id: '2',
        companyName: 'Company name',
        title: 'Title name',
        date: '19 hours ago',
        desciption: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        id: '3',
        companyName: 'Company name',
        title: 'Title name',
        date: '19 hours ago',
        desciption: 'Lorem ipsum dolor sit amet consectetur.',
    },

];

const LatestNews = () => {
    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 24px',
                height: 429,
                overflowY: 'scroll'
            }}
        >

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
                pb={'24px'}
            >
                <Typography
                    fontSize={17}
                    fontWeight={600}
                >
                    Latest News
                </Typography>

                <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={colorPalette.pink200}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Show all
                </Typography>

            </Stack>

            {
                newsList.map((_el, _index: number) => (
                    <Stack
                        key={_el.id}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        borderBottom={_index + 1 === newsList.length ? 'unset' : '1px solid rgba(0, 0, 0, 0.08)'}
                        py={'24px'}
                    >

                        <Stack
                            gap={'9px'}
                        >
                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                gap={'6px'}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={500}

                                >
                                    {_el.companyName}
                                </Typography>

                                <Typography
                                    component={'span'}
                                    bgcolor={colorPalette.gray600}
                                    padding={'1.5px'}
                                    borderRadius={'50%'} />

                                <Typography
                                    fontSize={12}
                                    fontWeight={400}
                                    color={colorPalette.gray600}
                                >
                                    {_el.date}
                                </Typography>
                            </Stack>

                            <Typography
                                fontSize={14}
                                fontWeight={600}
                            >
                                {_el.title}
                            </Typography>

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                                noWrap={true}
                                maxWidth={'95%'}
                            >
                                {_el.desciption}
                            </Typography>

                            <Typography
                                fontSize={13}
                                fontWeight={400}
                                color={colorPalette.pink200}
                                pt={'14px'}
                                sx={{
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                Metus tincidunt vel cursus senectus
                            </Typography>

                        </Stack>

                        <Avatar

                            sx={{
                                bgcolor: colorPalette.gray200,
                                width: 66,
                                height: 66,
                                borderRadius: '12px'
                            }}
                            variant={'rounded'}
                        >
                            <AssignmentIcon />
                        </Avatar>

                    </Stack>
                ))
            }

        </Paper>
    );
};

export default LatestNews;