import { useState } from 'react';
import Stack from '@mui/material/Stack';

import { Paper, ClientPagination, OfficeLocationMenu } from 'ui';
import { commonTypes } from '@models/common';
import Table from './Table';
import Filters from './Filters';
import SearchFilter from './SearchFilter';

const locationList = [
    {
        id: '1',
        name: 'Londong'
    },
    {
        id: '2',
        name: 'French'
    },
];

const AllJobsTab = () => {

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
                renderSearch={() => <SearchFilter onSearch={(searchValue) => { return; }} />}
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

export default AllJobsTab;