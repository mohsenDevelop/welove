import { useState } from 'react';
import Stack from '@mui/material/Stack';

import { Paper, ClientPagination, OfficeLocationMenu, Search } from 'ui';
import { commonTypes } from '@models/common';
import Table from './Table';
import Filters from './Filters';

const locationList = [
    {
        id: '1',
        name: 'London'
    },
    {
        id: '2',
        name: 'French'
    },
];

const ExpireJobsTab = () => {

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
                renderSearch={() => <Search placeHolder={'Enter a job role or ...'} onSearch={(searchValue) => { return; }} />}
                renderLocation={() => <OfficeLocationMenu list={locationList} />}
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

export default ExpireJobsTab;