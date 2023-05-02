import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colorPalette } from 'ui';

const SocialTopClientsTableHeader = () => {
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
                    Facebook
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Email
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    Whats app
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    SM1
                </TableCell>

                <TableCell
                    align={'right'}
                    sx={{ color: colorPalette.blue800 }}
                >
                    SM2
                </TableCell>

            </TableRow>

        </TableHead>
    );
};

export default SocialTopClientsTableHeader;