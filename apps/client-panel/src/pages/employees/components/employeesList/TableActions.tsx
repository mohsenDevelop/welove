import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { TableMenu, MenuItem, colorPalette } from 'ui';
import {
    EditTableIcon,
    DisabledTableIcon,
    RefreshTableIcon,
    TrashTableIcon,
    EyeTableIcon
} from 'assets-ui';
import {
    EMPLOYEES_DELETE_URL,
    EMPLOYEES_DISABLED_URL,
    EMPLOYEES_PROFILE_URL
} from '@config/urls';

const TableActions = () => {

    const navigate = useNavigate();

    return (
        <TableMenu>

            <MenuItem>
                <EyeTableIcon />
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={500}
                    pl={'10px'}
                    onClick={() => navigate(EMPLOYEES_PROFILE_URL)}
                >
                    View profile
                </Typography>
            </MenuItem>
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
                    onClick={() => navigate(EMPLOYEES_DISABLED_URL)}
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
                    onClick={() => navigate(EMPLOYEES_DELETE_URL)}
                >
                    Delete
                </Typography>
            </MenuItem>

        </TableMenu>
    )
}

export default TableActions