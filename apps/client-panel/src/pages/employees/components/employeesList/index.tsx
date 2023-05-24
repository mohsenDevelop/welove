import { useState } from 'react';
import Stack from '@mui/material/Stack';

import { Paper, ClientPagination, Search } from 'ui';
import { commonTypes } from '@models/common';
import Filters from './Filters';
import Table from './Table';

const EmployeesList = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 24px',
                mt: '24px'
            }}
        >
            <Filters
                renderSearch={() => <Search
                    placeHolder={'Search by name or email'}
                    onSearch={(searchValue) => { return; }}
                    sx={{ width: 387 }}
                />}
            />

            <Table />

            <Stack
                alignItems={'flex-end'}
                pt={'33px'}
            >

                <ClientPagination
                    count={10}
                    page={filters.page ?? 1}
                    onChange={(page: number) => {
                        setFilters((prev) => ({ ...prev, page: page }));
                    }}
                />

            </Stack>
        </Paper>
    );
};

export default EmployeesList;