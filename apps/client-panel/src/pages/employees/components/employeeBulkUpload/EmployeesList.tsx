import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Search } from 'ui';
import EmployeesTable from './EmployeesTable';

const EmployeesList = () => {
    return (
        <Stack pt={'28px'}>
            <Typography
                fontSize={16}
                fontWeight={500}
                pb={'10px'}
            >
                Add employees
            </Typography>
            <Search placeHolder={'Enter name'} sx={{ width: '100%' }} onSearch={(searchValue) => { return; }} />

            <EmployeesTable />
        </Stack>
    );
};

export default EmployeesList;