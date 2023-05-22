import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHeader from './TableHeader';

import {
    colorPalette
} from 'ui';

const rows = [
    { id: '1', jobRole: 'Job Role Placeholder', goLiveDate: '8/30/2022', shares: 150, applicatoins: 45, hires: 2, points: 1000 },
    { id: '2', jobRole: 'Job Role Placeholder', goLiveDate: '8/30/2022', shares: 150, applicatoins: 45, hires: 2, points: 1000 },
    { id: '3', jobRole: 'Job Role Placeholder', goLiveDate: '8/30/2022', shares: 150, applicatoins: 45, hires: 2, points: 1000 },
    { id: '4', jobRole: 'Job Role Placeholder', goLiveDate: '8/30/2022', shares: 150, applicatoins: 45, hires: 2, points: 1000 },
    { id: '5', jobRole: 'Job Role Placeholder', goLiveDate: '8/30/2022', shares: 150, applicatoins: 45, hires: 2, points: 1000 },

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
                                sx={
                                    {
                                        '& td': {
                                            borderBottom: 'unset',
                                            pb: '20px',
                                            bgcolor: _index % 2 === 0 ? colorPalette.pink10 : 'inherit',
                                            ':first-child': { borderRadius: '10px 0px 0px 10px' },
                                            ':last-child': { borderRadius: '0px 10px 10px 0px' },
                                        },
                                        borderRadius: '10px'
                                    }}
                            >
                                <TableCell align={'left'}>
                                    <Typography fontSize={14}>{_el.jobRole}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <Typography fontSize={14}>{_el.goLiveDate}</Typography>
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

                                <TableCell align={'right'}>
                                    <Typography fontSize={14}>{_el.points}</Typography>
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