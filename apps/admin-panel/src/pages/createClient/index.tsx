import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import { BreadCrumb, Paper } from 'ui';
import { CLIENT_MANAGEMENT_URL } from '@config/urls';

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
                sx={{ mt: '24px', p: '30px 24px' }}
            >

            </Paper>
        </Stack>
    );
};

export default CreateClientPage;