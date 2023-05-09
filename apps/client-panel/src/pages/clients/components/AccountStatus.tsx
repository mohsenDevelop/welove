import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    AccountSwitch
} from 'ui';

const AccountStatus = () => {

    const [status, setStatus] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.checked);
    };

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'8px'}
            border={'1px solid rgba(39, 64, 82, 0.15)'}
            borderRadius={'130px'}
            width={169}
            height={39}
        >
            <AccountSwitch
                checked={status}
                onChange={handleChange}
            />
            <Typography
                variant={'h1'}
                fontSize={12}
                fontWeight={400}
            >
                {status ? 'Account is enable' : 'Account is disable'}
            </Typography>
        </Stack>
    );
};

export default AccountStatus;