import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import LoginSideBar from './components/LoginSideBar';
import LoginForm from './components/LoginForm';
import LoginHeader from './components/LoginHeader';

const LoginPage = () => {

    return (
        <Stack
            height={'100vh'}
        >
            <LoginHeader />

            <Grid container={true} height={'100%'}>
                <Grid
                    item={true}
                    xs={6}
                >
                    <LoginForm />
                </Grid>

                <Grid
                    item={true}
                    xs={6}
                >
                    <Stack
                        height={'100%'}
                        justifyContent={'center'}
                    >

                        <LoginSideBar />

                    </Stack>

                </Grid>
            </Grid>

        </Stack>

    );
};

export default LoginPage;