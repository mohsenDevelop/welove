import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import { commonTypes } from '@models/common';
import {
    RewardCard,
    Button,
    colorPalette,
    ClientPagination
} from 'ui';
import { REWARD_APPROVE_URL, REWARD_DECLINE_URL } from '@config/urls';

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

const ToApproveTab = () => {

    const navigate = useNavigate();

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
                                    width={'100%'}
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    gap={'23px'}
                                >
                                    <Button
                                        variant={'contained'}
                                        backgroundColor={colorPalette.pink200}
                                        LabelColor={colorPalette.white}
                                        fullWidth={true}
                                        onClick={() => navigate(`${REWARD_APPROVE_URL}/2`)}
                                    >
                                        Approve reward
                                    </Button>
                                    <Button
                                        variant={'outlined'}
                                        borderColor={'rgba(39, 64, 82, 0.12)'}
                                        LabelColor={colorPalette.gray900}
                                        fullWidth={true}
                                        onClick={() => navigate(`${REWARD_DECLINE_URL}/2`)}
                                    >
                                        Decline
                                    </Button>
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

export default ToApproveTab;