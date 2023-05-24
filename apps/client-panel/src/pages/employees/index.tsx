import Stack from '@mui/material/Stack';

import EmployeesHeader from './components/EmployeesHeader';
import EmployeesList from './components/employeesList';

const EmployeesPage = () => {
    return (
        <Stack>
            <EmployeesHeader />
            <EmployeesList />
        </Stack>
    );
};

export default EmployeesPage;