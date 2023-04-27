import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Paper, TablePagination } from 'ui';
import SearchField from './SearchField';
import { commonTypes } from '@models/common';
import Table from './Table';

const ClientList = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <>
            <Paper
                sx={{ mt: '24px', p: '24px' }}
            >
                <Typography
                    variant={'h1'}
                    fontSize={17}
                    fontWeight={600}
                    pb={'24px'}
                >
                    Client List
                </Typography>

                <SearchField
                    onSearch={(value: string) => { return; }}
                />

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
        </>
    );
};

export default ClientList;