import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Paper, Button, colorPalette } from 'ui';
import { TrashIcon } from 'assets-ui';
import TableHeader from './TableHeader';

const rows = [
    {
        id: '1',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '2',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '3',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '4',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '5',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
];

const Table = () => {
    return (
        <Paper
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                borderRadius: '20px',
                p: '24px 50px 24px 24px',
                maxHeight: '390px',
                overflowY: 'scroll'
            }}
        >
            <TableContainer sx={{ width: '100%' }}>
                <MuiTable>
                    <TableHeader />
                    <TableBody>
                        {
                            rows.map((_el, _index) => (
                                <TableRow
                                    key={_el.id}
                                    hover={false}
                                    sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                                >
                                    <TableCell align={'left'} sx={{ pl: '0px' }}>
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            gap={'6px'}
                                        >
                                            <Typography
                                                fontSize={14}
                                                fontWeight={500}
                                            >
                                                {_el.fullName}
                                            </Typography>
                                            <Typography fontSize={12}>{_el.email}</Typography>

                                        </Box>
                                    </TableCell>

                                    <TableCell align={'left'} sx={{ pl: '0px' }}>
                                        <Typography fontSize={12} fontWeight={500}>{_el.company}</Typography>

                                    </TableCell>

                                    <TableCell align={'right'}>
                                        <Button
                                            variant={'outlined'}
                                            LabelColor={colorPalette.red200}
                                            borderColor={'rgba(39, 64, 82, 0.15)'}
                                            startIcon={<TrashIcon />}
                                            sx={{
                                                fontSize: 13,
                                                fontWeight: 500,
                                                width: 105
                                            }}
                                        // onClick={() => navigate(DELETE_ADMIN_URL)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))
                        }
                    </TableBody>
                </MuiTable>
            </TableContainer>

        </Paper>
    );
};

export default Table;