import { BorderBottom } from '@mui/icons-material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colorPalette } from 'ui';

const EmployeeTableHeader = () => {
    return (
        <TableHead>

            <TableRow
                sx={{ '& th': { borderBottom: 'unset', pl: '0px' } }}
            >

                <TableCell
                    align={'left'}
                    sx={{
                        color: colorPalette.blue800,
                    }}
                >
                    Admin
                </TableCell>

            </TableRow>

        </TableHead>
    )
}

export default EmployeeTableHeader