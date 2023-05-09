import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { colorPalette, Button, LoginTextField } from 'ui';
import { EyeIcon } from 'assets-ui';
import {
    initialValuesProps,
    initialValues,
    validationSchema
} from '@formValidations/changePassword';
import { LOGIN_URL } from '@config/urls';

const SetPassForm = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState({ oldPass: false, newPass: false, rePass: false });

    const formik = useFormik({
        initialValues: initialValues as initialValuesProps,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log({ values });
        },
    });

    const { errors, touched, values, isValid, handleSubmit, getFieldProps } = formik;

    return (
        <FormikProvider value={values as any}>
            <Form
                onSubmit={handleSubmit}
                autoComplete={'off'}
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={548}
                    gap={'26px'}
                >

                    <Stack
                        gap={'10px'}
                        width={'100%'}
                    >

                        <Typography fontSize={14} fontWeight={500}>Password</Typography>
                        <LoginTextField
                            placeholder={''}
                            type={showPassword.oldPass ? 'text' : 'password'}
                            fullWidth={true}
                            {...getFieldProps('oldPassword')}
                            inputProps={{
                                autoComplete: 'off',
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <IconButton onClick={() => setShowPassword({ ...showPassword, oldPass: !showPassword.oldPass })} edge='start'>
                                            <EyeIcon style={{ width: 24, height: 24 }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={Boolean(touched.oldPassword && errors.oldPassword)}
                            helperText={touched.oldPassword && errors.oldPassword}
                        />
                    </Stack>

                    <Stack
                        gap={'10px'}
                        width={'100%'}
                    >
                        <Typography fontSize={14} fontWeight={500}>Confirm Password</Typography>
                        <LoginTextField
                            placeholder={''}
                            type={showPassword.newPass ? 'text' : 'password'}
                            fullWidth={true}
                            {...getFieldProps('newPassword')}
                            inputProps={{
                                autoComplete: 'off',
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <IconButton onClick={() => setShowPassword({ ...showPassword, newPass: !showPassword.newPass })} edge='start'>
                                            <EyeIcon style={{ width: 24, height: 24 }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={Boolean(touched.newPassword && errors.newPassword)}
                            helperText={touched.newPassword && errors.newPassword}
                        />
                    </Stack>

                    <Button
                        variant={'contained'}
                        type={'submit'}
                        fullWidth={true}
                        backgroundColor={colorPalette.purple}
                        disabled={!isValid}
                        sx={{ mt: '9px', width: 343, height: 54 }}
                    >
                        Login
                    </Button>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Already have an account?
                        <Typography
                            component={'span'}
                            fontSize={14}
                            fontWeight={600}
                            color={colorPalette.pink200}
                            px={'4px'}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate(LOGIN_URL)}
                        >
                            Log in
                        </Typography>

                    </Typography>

                </Stack>
            </Form>
        </FormikProvider>
    )
}

export default SetPassForm