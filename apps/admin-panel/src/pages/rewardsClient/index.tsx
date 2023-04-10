import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BreadCrumb, Paper, TablePagination } from 'ui';
import { REWARD_CLEINT_URL, REWARD_URL } from '@config/urls';
import { commonTypes } from '@models/common';
import RewardClientHeader from './components/RewardClientHeader';
import Table from './components/Table';

const RewardsClient = () => {

    const navigate = useNavigate();
    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <Stack>
            <BreadCrumb
                list={[
                    { link: REWARD_URL, name: 'Rewards' },
                    { link: REWARD_CLEINT_URL, name: 'Rewards by clients' },
                ]}
                onClick={(link: string) => navigate(link)}
            />
            <Typography variant={'h1'} p={'12px 0px 24px 0px'}>Rewards by clients</Typography>
            <Paper
                sx={{ mt: '24px', p: '30px 24px' }}
            >
                <RewardClientHeader />
                <Table />
            </Paper>

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
        </Stack>
    );
};

export default RewardsClient;