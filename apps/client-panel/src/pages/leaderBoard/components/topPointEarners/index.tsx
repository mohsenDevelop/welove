import { useState } from 'react';
import Stack from '@mui/material/Stack';

import {
    Paper,
    ClientPagination,
    OfficeLocationMenu,
    Search,
    DivisionMenu
} from 'ui';
import { commonTypes } from '@models/common';
import Filters from './Filters';
import Table from './Table';

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

const divisionList = [
    {
        id: '1',
        name: 'IT'
    },
    {
        id: '2',
        name: 'Human Resources'
    },
];

const TopPointEarners = () => {

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
                renderLocation={() => <OfficeLocationMenu list={locationList} />}
                renderDivision={() => <DivisionMenu list={divisionList} />}
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

export default TopPointEarners;