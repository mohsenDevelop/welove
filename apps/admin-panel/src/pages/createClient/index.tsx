import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BreadCrumb, Paper } from 'ui';
import { CLIENT_MANAGEMENT_URL } from '@config/urls';
import ClientForm from './components/clientForm';
import AdminAccess from './components/adminAcess';

const CreateClientPage = () => {

    const navigate = useNavigate();

    return (
        <Stack>
            <BreadCrumb
                list={[
                    { link: CLIENT_MANAGEMENT_URL, name: 'Clients' },
                    { link: '', name: 'Add new client' },
                ]}
                onClick={(link: string) => navigate(link)}
            />
            <Paper
                sx={{ mt: '24px', p: '30px 57px 30px 24px' }}
            >
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={600}
                    pb={'10px'}
                >
                    Add new
                </Typography>

                <Typography
                    variant={'h1'}
                    fontSize={28}
                    fontWeight={600}
                    pb={'38px'}
                >
                    Client
                </Typography>

                <ClientForm />
                <AdminAccess />

            </Paper>
        </Stack>
    );
};

export default CreateClientPage;