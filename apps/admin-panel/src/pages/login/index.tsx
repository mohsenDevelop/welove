import * as React from 'react';
import { TextField, Button, colorPalette } from 'ui';

const LoginPage = () => {
    return (
        <div>
            <TextField placeholder='hello' />
            <Button backgroundColor={colorPalette.purple} LabelColor={colorPalette.white} variant={'contained'}>Login</Button >
        </div >
    );
};

export default LoginPage;