import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { BackButton } from 'ui';
import ProfileView from './ProfileView';
import ProfileStatisics from './ProfileStatisics';

const EmployeeProfilePage = () => {

    const navigate = useNavigate();

    return (
        <Stack gap={'37px'}>

            <BackButton
                onClick={() => navigate(-1)}
            />
            <Grid container={true} spacing={3}>
                <Grid
                    item={true}
                    xs={8}
                >
                    <ProfileView />
                </Grid>

                <Grid
                    item={true}
                    xs={4}
                >
                    <ProfileStatisics />

                </Grid>
            </Grid>


        </Stack>
    );
};

export default EmployeeProfilePage;