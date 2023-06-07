import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { commonTypes } from '@models/common';
import {
    RewardCard,
    ClientPagination,
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


const ClaimsTab = () => {

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
                            theme={'lightBlue'}
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
                                        Approved
                                    </Typography>
                                </Stack>
                            )}
                        />
                    ))
                }
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

export default ClaimsTab;