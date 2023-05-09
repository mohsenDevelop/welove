import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import {
    Button,
    colorPalette
} from 'ui';
import { TrashIcon } from 'assets-ui';
import { DELETE_ADMIN_URL } from '@config/urls';
import TableHeader from './TableHeader';

const rows = [
    { id: '1', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '2', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '3', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '4', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '5', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '6', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '7', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
    { id: '8', name: 'Randy Calzoni', email: 'DarleneRobertson@gmail.com' },
];

const Table = () => {

    const navigate = useNavigate();

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
                                            borderRadius: '10px'
                                        }
                                    }}
                            >
                                <TableCell align={'left'} sx={{ pl: '16px' }}>
                                    <Box
                                        display={'flex'}
                                        flexDirection={'column'}
                                        gap={'4px'}
                                    >
                                        <Typography fontSize={14}>{_el.name}</Typography>
                                        <Typography fontSize={12}>{_el.email}</Typography>

                                    </Box>
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
                                        onClick={() => navigate(DELETE_ADMIN_URL)}
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
    );
};

export default Table;