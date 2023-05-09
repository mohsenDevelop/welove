import { useRef, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ReCAPTCHA from 'react-google-recaptcha';

import { colorPalette, Button, LoginTextField } from 'ui';
import { EyeIcon } from 'assets-ui';
import { initialValues, validationSchema, initialValuesProps } from '@formValidations/login';
import { DASHBOARD_URL } from '@config/urls';

const LoginForm = () => {

    const navigate = useNavigate();
    const captchaRef = useRef<any>(null);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues as initialValuesProps,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log({ values });
            navigate(DASHBOARD_URL, { replace: true });
            /// if there is error, captcha must be reset
            if (captchaRef) { captchaRef?.current.reset(); }
        },
    });

    const { errors, touched, values, isValid, handleSubmit, getFieldProps, setFieldValue } = formik;

    const handleChangeCaptcha = (token: string | null) => {
        setFieldValue('recaptcha', token ?? '');
    };

    return (
        <FormikProvider value={values as any}>
            <Form
                onSubmit={handleSubmit}
                autoComplete={'off'}
            >
                <Stack
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pt={'110px'}
                >
                    <Typography
                        fontSize={32}
                        fontWeight={700}
                        lineHeight={'33px'}
                        textAlign={'center'}
                        variant={'h1'}
                        pb={'44px'}
                    >
                        Lorem ipsum WeLove9Am
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        By Log in, I agree to WeLove9Am’s
                        <Typography
                            component={'span'}
                            fontSize={14}
                            fontWeight={600}
                            color={colorPalette.pink200}
                            px={'4px'}
                            sx={{
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Terms
                        </Typography>
                        and
                        <Typography
                            component={'span'}
                            fontSize={14}
                            fontWeight={600}
                            color={colorPalette.pink200}
                            px={'4px'}
                            sx={{
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Privacy Policy.
                        </Typography>

                    </Typography>

                    <Stack
                        gap={'26px'}
                        maxWidth={'548px'}
                        width={'100%'}
                        pt={'44px'}
                    >

                        <Stack
                            gap={'10px'}
                            flex={1}
                        >

                            <Typography fontSize={14} fontWeight={500} pb={''}>Email address</Typography>
                            <LoginTextField
                                placeholder={'Enter email address'}
                                fullWidth={true}
                                {...getFieldProps('email')}
                                inputProps={{
                                    autoComplete: 'off',
                                }}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                                sx={{
                                    height: 54
                                }}
                            />
                        </Stack>

                        <Stack
                            gap={'10px'}
                            flex={1}
                        >

                            <Typography fontSize={14} fontWeight={500} pb={''}>Password</Typography>
                            <LoginTextField
                                placeholder={'Enter password...'}
                                type={showPassword ? 'text' : 'password'}
                                fullWidth={true}
                                {...getFieldProps('password')}
                                inputProps={{
                                    autocomplete: 'off',
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='start'>
                                            <IconButton onClick={() => setShowPassword((prev) => !prev)} edge='start'>
                                                <EyeIcon style={{ width: 24, height: 24 }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                error={Boolean(touched.email && errors.password)}
                                helperText={touched.password && errors.password}
                                sx={{
                                    height: 54
                                }}
                            />
                        </Stack>

                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey={'6Lc1kpIjAAAAAJ8A9pxpuR-a4uc1UZZLYQo0aaH-'}
                            onChange={handleChangeCaptcha}
                            size={'normal'}
                            className={'login-captcha'}
                        />

                        <Button
                            variant={'contained'}
                            type={'submit'}
                            fullWidth={true}
                            backgroundColor={colorPalette.purple}
                            disabled={!isValid}
                            sx={{ mt: '5px', height: 54 }}
                        >
                            Login
                        </Button>

                    </Stack>

                </Stack>

            </Form>
        </FormikProvider>
    );
};

export default LoginForm;