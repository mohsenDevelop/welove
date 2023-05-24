import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TableMenu, MenuItem, colorPalette } from 'ui';
import {
    EditTableIcon,
    DisabledTableIcon,
    RefreshTableIcon,
    TrashTableIcon
} from 'assets-ui';

const TableActions = () => {
    return (
        <TableMenu>

            <MenuItem>
                <EditTableIcon />
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={500}
                    pl={'10px'}
                >
                    Edit
                </Typography>
            </MenuItem>

            <MenuItem>
                <RefreshTableIcon />
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={500}
                    pl={'10px'}
                >
                    Resend
                </Typography>
            </MenuItem>

            <MenuItem>
                <DisabledTableIcon />
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={500}
                    pl={'10px'}
                >
                    Disabled
                </Typography>
            </MenuItem>

            <MenuItem>
                <TrashTableIcon />
                <Typography
                    color={colorPalette.red150}
                    fontSize={14}
                    fontWeight={500}
                    pl={'10px'}
                >
                    Delete
                </Typography>
            </MenuItem>

        </TableMenu>
    )
}

export default TableActions