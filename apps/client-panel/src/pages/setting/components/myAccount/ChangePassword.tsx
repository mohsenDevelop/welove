import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import {
    colorPalette,
    Button
} from 'ui';

const ChangePassword = () => {

    const navigate = useNavigate();

    return (
        <>
            <Typography
                variant={'h1'}
                fontSize={20}
                fontWeight={600}
                pb={'7px'}
            >
                Password
            </Typography>

            <Typography
                fontSize={14}
                fontWeight={400}
                pb={'24px'}
            >
                Lorem ipsum dolor sit amet consectetur.
            </Typography>

            <Button
                variant={'outlined'}
                borderColor={'rgba(39, 64, 82, 0.15)'}
                LabelColor={colorPalette.gray900}
                fullWidth={false}
                sx={{ width: 161 }}
                onClick={() => navigate('change-password')}
            >
                Change password
            </Button>

        </>
    );
};

export default ChangePassword;