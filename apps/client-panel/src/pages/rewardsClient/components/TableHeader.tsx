import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colorPalette } from 'ui';

const TableHeader = () => {
    return (
        <TableHead>

            <TableRow
                sx={{ '& th': { borderBottom: 'unset', pl: '0px' } }}
            >

                <TableCell
                    align={'left'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Company
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Points
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Pending
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Approved
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                />

            </TableRow>

        </TableHead>
    );
};

export default TableHeader;