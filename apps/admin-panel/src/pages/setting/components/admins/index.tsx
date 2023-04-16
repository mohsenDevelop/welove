import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper } from 'ui';
import Table from './Table';
import SearchForm from './SearchForm';

const AdminsTab = () => {
    return (
        <Stack
            pt={'24px'}
        >
            <Paper
                sx={{ p: '42px 24px' }}
            >
                <Typography
                    variant={'h1'}
                    fontSize={17}
                    fontWeight={600}
                    pb={'39px'}
                >
                    Admins list
                </Typography>

                <SearchForm onSearch={(val: string) => { return; }} />

                <Table />

            </Paper>
        </Stack>
    );
};

export default AdminsTab;