import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colorPalette } from 'ui';

const TableHeader = () => {
    return (
        <TableHead>

            <TableRow
                sx={{ '& th': { borderBottom: 'unset', pl: 'px' } }}
            >

                <TableCell
                    align={'left'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Full name
                </TableCell>

            </TableRow>

        </TableHead>
    );
};

export default TableHeader;