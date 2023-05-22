import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHeader from './TableHeader';



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
                                sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                            >
                                <TableCell align={'left'} sx={{ pl: '0px' }}>
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