import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    LeadershipFillIcon
} from 'assets-ui';
import { TablePagination } from 'ui';
import { commonTypes } from '@models/common';
import Table from './components/Table';

const LeadershipBoard = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <Stack>
            <LeadershipFillIcon />
            <Typography variant={'h1'} p={'24px 0px'}>Leadership board</Typography>

            <Stack>
                <Table />

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
        </Stack>
    );
};

export default LeadershipBoard;