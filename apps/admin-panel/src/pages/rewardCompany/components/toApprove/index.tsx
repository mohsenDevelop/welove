import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { commonTypes } from '@models/common';
import {
    RewardCard,
    TablePagination,
    Button,
    colorPalette
} from 'ui';

const approveList = [
    {
        id: '1',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
    {
        id: '2',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
    {
        id: '3',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
    {
        id: '4',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
    {
        id: '5',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
    {
        id: '6',
        jobTitle: 'Job Title Placeholder Text',
        point: 2512,
        action: 'Hire',
        paltform: 'Facebook',
        employee: 'John Doe',
        referral: 'Carter Donin',
    },
];

const ToApprove = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <>
            <Stack
                display={'grid'}
                gridTemplateColumns={'repeat(2, 1fr)'}
                gap={'24px'}
                pt={'24px'}
            >
                {
                    approveList.map((_el) => (
                        <RewardCard
                            key={_el.id}
                            jobTitle={_el.jobTitle}
                            point={_el.point}
                            action={_el.action}
                            paltform={_el.paltform}
                            employee={_el.employee}
                            referral={_el.referral}
                            theme={'darkBlue'}
                            actions={(
                                <Stack
                                    width={'100%'}
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    gap={'23px'}
                                >
                                    <Button
                                        variant={'contained'}
                                        backgroundColor={colorPalette.purple}
                                        LabelColor={colorPalette.white}
                                        fullWidth={true}
                                    >
                                        Approve reward
                                    </Button>
                                    <Button
                                        variant={'outlined'}
                                        borderColor={'rgba(39, 64, 82, 0.12)'}
                                        LabelColor={colorPalette.gray900}
                                        fullWidth={true}
                                    >
                                        Decline
                                    </Button>
                                </Stack>
                            )}
                        />
                    ))
                }
            </Stack>

            <Box
                display={'flex'}
                justifyContent={'flex-end'}
                pt={'24px'}
            >
                <TablePagination
                    // count={Math.ceil(paginationData?.total / UtilsHelper.tableRowCount)}
                    count={10}
                    page={filters.page ?? 1}
                    defaultPage={1}
                    onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                        setFilters((prev) => ({ ...prev, page: page }));
                    }}
                    shape='rounded'
                />
            </Box>
        </>
    );
};

export default ToApprove;