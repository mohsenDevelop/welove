import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper, colorPalette } from 'ui';

const pendingList = [
    {
        id: '1',
        title: 'Job Title Placeholder',
        point: 500,
        contactPerson: 'John Doe',
        referral: 'Taj Dhunay',
        dueDate: '22/04/22',
        date: '15 Oct'
    },
    {
        id: '2',
        title: 'Job Title Placeholder',
        point: 500,
        contactPerson: 'John Doe',
        referral: 'Taj Dhunay',
        dueDate: '22/04/22',
        date: '15 Oct'
    },
    {
        id: '3',
        title: 'Job Title Placeholder',
        point: 500,
        contactPerson: 'John Doe',
        referral: 'Taj Dhunay',
        dueDate: '22/04/22',
        date: '15 Oct'
    },
];

const PendingPointes = () => {
    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 24px'
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
                    Pending Points
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
                pendingList.map((_el, _index) => (
                    <Stack
                        key={_el.id}
                        flexDirection={'row'}
                        alignItems={'baseline'}
                        justifyContent={'space-between'}
                        borderBottom={_index + 1 === pendingList.length ? 'unset' : '1px solid rgba(0, 0, 0, 0.08)'}
                        py={'24px'}
                    >
                        <Stack
                            gap={'11px'}
                        >
                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                gap={'6px'}
                            >
                                <Typography
                                    fontSize={15}
                                    fontWeight={600}
                                >
                                    Title Placeholde
                                </Typography>

                                <Typography
                                    component={'span'}
                                    bgcolor={colorPalette.gray900}
                                    padding={'1.5px'}
                                    borderRadius={'50%'} />

                                <Typography
                                    fontSize={14}
                                    fontWeight={600}
                                >
                                    {_el.title}
                                </Typography>
                            </Stack>

                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                gap={'6px'}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={600}
                                    color={colorPalette.gray600}
                                >
                                    Contact person:

                                    <Typography
                                        component={'span'}
                                        fontSize={12}
                                        fontWeight={400}
                                        pl={'4px'}
                                        color={colorPalette.gray600}
                                    >
                                        {_el.contactPerson}
                                    </Typography>
                                </Typography>

                                <Typography
                                    component={'span'}
                                    bgcolor={colorPalette.gray900}
                                    padding={'1.5px'}
                                    borderRadius={'50%'} />

                                <Typography
                                    fontSize={12}
                                    fontWeight={600}
                                    color={colorPalette.gray600}
                                >
                                    Referral:

                                    <Typography
                                        component={'span'}
                                        fontSize={12}
                                        fontWeight={400}
                                        color={colorPalette.gray600}
                                        pl={'4px'}
                                    >
                                        {_el.referral}
                                    </Typography>
                                </Typography>
                            </Stack>

                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                gap={'6px'}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={600}
                                    color={colorPalette.gray600}
                                >
                                    Due Date:
                                </Typography>

                                <Typography
                                    fontSize={12}
                                    fontWeight={400}
                                    color={colorPalette.gray600}
                                >
                                    {_el.dueDate}
                                </Typography>
                            </Stack>

                        </Stack>

                        <Typography
                            fontSize={11}
                            fontWeight={500}
                            color={colorPalette.gray600}
                            sx={{
                                opacity: .7
                            }}
                        >
                            {_el.date}
                        </Typography>

                    </Stack>
                ))
            }

        </Paper>
    );
};

export default PendingPointes;