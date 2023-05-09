import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { colorPalette } from 'ui';
import { ADD_CLIENT_ADMIN_URL } from '@config/urls';
import AdminHeader from './AdminHeader';
import Table from './Table';

const AdminAccess = () => {

    const navigate = useNavigate();

    return (
        <Stack
            pt={'44px'}
        >
            <AdminHeader onSearch={(val: string) => { return; }} />
            <Table />

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                pt={'24px'}
                gap={'10px'}
                sx={{ cursor: 'pointer' }}
            >
                <AddOutlinedIcon sx={{ color: colorPalette.purple }} />

                <Typography
                    fontSize={16}
                    fontWeight={500}
                    color={colorPalette.purple}
                    onClick={() => navigate(`${ADD_CLIENT_ADMIN_URL}/1`)}

                >
                    Add Admin
                </Typography>
            </Stack>
        </Stack>
    );
};

export default AdminAccess;