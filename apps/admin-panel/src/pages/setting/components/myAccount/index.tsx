import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import AccountForm from './AccountForm';
import ChangePassword from './ChangePassword';

const MyAccountTab = () => {

    return (
        <Stack pt={'24px'}>
            <AccountForm />
            <Divider
                flexItem={true}
                variant={'fullWidth'}
                sx={{ m: '24px 0px' }}
            />
            <ChangePassword />
        </Stack>
    );
};

export default MyAccountTab;