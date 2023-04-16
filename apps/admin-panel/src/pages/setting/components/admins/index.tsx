import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper, Button, colorPalette } from 'ui';
import Table from './Table';
import SearchForm from './SearchForm';
import { CREATE_ADMIN_URL } from '@config/urls';

const AdminsTab = () => {

    const navigate = useNavigate();

    return (
        <Stack
            pt={'24px'}
        >
            <Paper
                sx={{ p: '42px 24px' }}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    pb={'39px'}
                >
                    <Typography
                        variant={'h1'}
                        fontSize={17}
                        fontWeight={600}
                        pb={'39px'}
                    >
                        Admins list
                    </Typography>

                    <Button
                        variant={'contained'}
                        backgroundColor={colorPalette.purple}
                        LabelColor={colorPalette.white}
                        sx={{ width: 114 }}
                        onClick={() => navigate(CREATE_ADMIN_URL)}
                    >
                        Add admin
                    </Button>
                </Stack>

                <SearchForm onSearch={(val: string) => { return; }} />

                <Table />

            </Paper>
        </Stack>
    );
};

export default AdminsTab;