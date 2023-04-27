import Typography from '@mui/material/Typography';

import { Paper } from 'ui';
import SearchField from './SearchField';
import Table from './Table';

const ClientList = () => {
    return (
        <Paper
            sx={{ mt: '24px', p: '24px' }}
        >
            <Typography
                variant={'h1'}
                fontSize={17}
                fontWeight={600}
                pb={'24px'}
            >
                Client List
            </Typography>

            <SearchField
                onSearch={(value: string) => { return; }}
            />

            <Table />

        </Paper>
    );
};

export default ClientList;