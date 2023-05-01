import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Paper,
    Button,
    colorPalette,
    TablePagination
} from 'ui';
import { commonTypes } from '@models/common';
import PerformanceTabHeader from './TabHeader';
import PerformanceHeader from './Header';
import PerformanceSearch from './Search';

const rows = [
    {
        id: '1',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '2',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '3',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '4',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '5',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '6',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '7',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '8',
        jobRole: 'Company Name Placeholder',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
];

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

                <TableContainer sx={{ width: '100%', pt: '16px' }}>

                    <MuiTable>
                        <PerformanceTabHeader />

                        <TableBody>
                            {
                                rows.map((_el, _index: number) => (
                                    <TableRow
                                        key={_el.id}
                                        hover={false}
                                        sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                                    >

                                        <TableCell align={'left'} sx={{ pl: '0px' }}>
                                            <Typography fontSize={14}>{_el.jobRole}</Typography>
                                        </TableCell>

                                        <TableCell align={'right'}>
                                            <Typography fontSize={14}>{_el.Sectors}</Typography>
                                        </TableCell>

                                        <TableCell align={'right'}>
                                            <Typography fontSize={14}>{_el.points}</Typography>
                                        </TableCell>

                                        <TableCell align={'right'}>
                                            <Typography fontSize={14}>{_el.shares}</Typography>
                                        </TableCell>

                                        <TableCell align={'right'}>
                                            <Typography fontSize={14}>{_el.applicatoins}</Typography>
                                        </TableCell>

                                        <TableCell align={'right'}>
                                            <Typography fontSize={14}>{_el.hires}</Typography>
                                        </TableCell>

                                    </TableRow>
                                ))
                            }
                        </TableBody>

                    </MuiTable>

                </TableContainer>
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