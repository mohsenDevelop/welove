import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colorPalette } from 'ui';

const PerformanceTabelHeader = () => {
    return (
        <TableHead>

            <TableRow
                sx={{ '& th': { borderBottom: 'unset', pl: '0px' } }}
            >

                <TableCell
                    align={'left'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Job role
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Sectors
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
                    Shares
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Applications
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Hires
                </TableCell>

            </TableRow>

        </TableHead>
    );
};

export default PerformanceTabelHeader;