import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHeader from './TableHeader';

import {
    Button,
    colorPalette
} from 'ui';

const rows = [
    { id: '1', company: 'Company Name Placeholder', Points: 54, Pending: 2, Approved: 1000 },
    { id: '2', company: 'Company Name Placeholder', Points: 32, Pending: 2, Approved: 1000 },
    { id: '3', company: 'Company Name Placeholder', Points: 190, Pending: 2, Approved: 1000 },
    { id: '4', company: 'Company Name Placeholder', Points: 150, Pending: 2, Approved: 1000 },
    { id: '5', company: 'Company Name Placeholder', Points: 180, Pending: 2, Approved: 1000 },
    { id: '6', company: 'Company Name Placeholder', Points: 298, Pending: 2, Approved: 1000 },
];

const Table = () => {
    return (
        <TableContainer sx={{ width: '100%', pt: '16px' }}>
            <MuiTable>
                <TableHeader />
                <TableBody>
                    {
                        rows.map((_el, _index: number) => (
                            <TableRow
                                key={_el.id}
                                hover={false}
                                sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                            >
                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Typography fontSize={14}>{_el.company}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <Typography fontSize={14}>{_el.Points}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <Typography fontSize={14}>{_el.Pending}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <Typography fontSize={14}>{_el.Approved}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <Button
                                        variant={'outlined'}
                                        LabelColor={colorPalette.purple}
                                        borderColor={'rgba(39, 64, 82, 0.15)'}
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 500,
                                            height: 34,
                                            width: 124
                                        }}
                                    >
                                        View details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

            </MuiTable>
        </TableContainer>
    );
};

export default Table;