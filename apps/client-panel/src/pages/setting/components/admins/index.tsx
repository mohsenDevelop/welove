import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper, Button, colorPalette } from 'ui';
import { CREATE_ADMIN_URL } from '@config/urls';
import Table from './Table';

const AdminsTab = () => {

    const navigate = useNavigate();

    return (
        <Stack
            pt={'24px'}
        >
            <Paper
                sx={{ p: '30px 24px' }}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    pb={'24px'}
                >
                    <Typography
                        variant={'h1'}
                        fontSize={17}
                        fontWeight={600}
                    >
                        Admins list (4)
                    </Typography>

                    <Button
                        variant={'contained'}
                        backgroundColor={colorPalette.blue800}
                        LabelColor={colorPalette.white}
                        sx={{ width: 144, height: 40 }}
                        onClick={() => navigate(CREATE_ADMIN_URL)}
                    >
                        Add Admin
                    </Button>
                </Stack>

                <Table />

            </Paper>
        </Stack>
    );
};

export default AdminsTab;