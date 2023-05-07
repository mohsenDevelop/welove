import Stack from '@mui/material/Stack';
import AdminHeader from './AdminHeader';
import Table from './Table';

const AdminAccess = () => {
    return (
        <Stack
            pt={'44px'}
        >
            <AdminHeader onSearch={(val: string) => { return; }} />
            <Table />
        </Stack>
    );
};

export default AdminAccess;