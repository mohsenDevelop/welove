import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { commonTypes } from '@models/common';
import {
    RewardCard,
    TablePagination,
    colorPalette
} from 'ui';
import { DoneBoldIcon } from 'assets-ui';

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

const Completed = () => {

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
                            theme={'green'}
                            actions={(
                                <Stack
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    width={'100%'}
                                    height={44}
                                    bgcolor={'rgba(179, 252, 195, 0.4)'}
                                    borderRadius={'176px'}
                                >
                                    <DoneBoldIcon />
                                    <Typography
                                        fontSize={14}
                                        fontWeight={500}
                                        color={colorPalette.green500}
                                    >
                                        COMPLETED
                                    </Typography>
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

export default Completed;