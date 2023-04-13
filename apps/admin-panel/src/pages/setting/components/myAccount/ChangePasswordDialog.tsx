import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import {
    initialValuesProps,
    initialValues,
    validationSchema
} from '@formValidations/changePassword';
import {
    Dialog,
    colorPalette,
    TextField,
    Button
} from 'ui';
import { CloseIcon, EyeIcon } from 'assets-ui';

const ChangePasswordDialog = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState({ oldPass: false, newPass: false, rePass: false });

    const formik = useFormik({
        initialValues: initialValues as initialValuesProps,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log({ values });
        },
    });

    const { errors, touched, values, isValid, handleSubmit, getFieldProps, setFieldValue } = formik;

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'620px'}
        >
            <Stack
                p={'34px 34px 24px 34px'}
            >
                <Stack
                    alignItems={'flex-end'}
                >
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>
                <Typography
                    fontSize={20}
                    fontWeight={600}
                    pb={'12px'}
                >
                    Change password
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                    color={colorPalette.gray550}
                    pb={'38px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit.
                </Typography>

                <FormikProvider value={values as any}>
                    <Form
                        onSubmit={handleSubmit}
                        autoComplete={'off'}
                    >
                        <Stack
                            width={'100%'}
                            gap={'24px'}
                        >

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Old password</Typography>
                                <TextField
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
                            >
                                <Typography fontSize={14} fontWeight={500}>New password</Typography>
                                <TextField
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

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>New password</Typography>
                                <TextField
                                    placeholder={''}
                                    type={showPassword.rePass ? 'text' : 'password'}
                                    fullWidth={true}
                                    {...getFieldProps('rePassword')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <IconButton onClick={() => setShowPassword({ ...showPassword, rePass: !showPassword.rePass })} edge='start'>
                                                    <EyeIcon style={{ width: 24, height: 24 }} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={Boolean(touched.rePassword && errors.rePassword)}
                                    helperText={touched.rePassword && errors.rePassword}
                                />
                            </Stack>

                            <Stack
                                flexDirection={'row-reverse'}
                                gap={'8px'}
                            >
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.purple}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 200 }}
                                >
                                    Change password
                                </Button>

                                <Button
                                    variant={'outlined'}
                                    borderColor={'rgba(39, 64, 82, 0.15)'}
                                    LabelColor={colorPalette.gray900}
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                </FormikProvider>
            </Stack>

        </Dialog>
    );
};

export default ChangePasswordDialog;