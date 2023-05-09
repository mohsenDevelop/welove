import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { colorPalette } from 'ui';
import LoginSideBar from './components/LoginSideBar';
import LoginForm from './components/LoginForm';

const LoginPage = () => {

    return (
        <Stack
            height={'100vh'}
            flexDirection={'row'}
            alignItems={'center'}
        >
            <Grid container={true} height={'100%'}>
                <Grid
                    item={true}
                    xs={5}
                    bgcolor={colorPalette.blue900}
                >
                    <LoginSideBar />
                </Grid>

                <Grid
                    item={true}
                    xs={7}
                >
                    <Stack
                        height={'100%'}
                        justifyContent={'center'}
                    >

                        <LoginForm />
                    </Stack>

                </Grid>
            </Grid>

        </Stack>

    );
};

export default LoginPage;