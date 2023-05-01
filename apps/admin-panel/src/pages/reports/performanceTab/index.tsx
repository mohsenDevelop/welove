import { useState } from 'react';
import Box from '@mui/material/Box';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Paper,
    Button,
    colorPalette,
    TablePagination
} from 'ui';
import { commonTypes } from '@models/common';
import PerformanceHeader from './Header';
import PerformanceSearch from './Search';
import PerformanceTabel from './Tabel';

const PerformanceTab = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <>
            <Paper
                sx={{ mt: '24px', p: '24px' }}
            >

                <PerformanceHeader
                    renderCsv={() => (
                        <Button
                            variant={'outlined'}
                            LabelColor={colorPalette.blue800}
                            borderColor={'rgba(39, 64, 82, 0.15)'}
                            startIcon={<FileDownloadOutlinedIcon />}
                            sx={{
                                fontSize: 13,
                                fontWeight: 500
                            }}
                        >
                            Downlaod csv
                        </Button>
                    )}
                    renderSearch={() => <PerformanceSearch onSearch={(searchValue) => { return; }} />}
                />

                <PerformanceTabel />

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

export default PerformanceTab;