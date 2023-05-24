import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import {
    Dialog,
    colorPalette,
    TextField,
    Button
} from 'ui';
import { CloseIcon, EyeIcon } from 'assets-ui';
import UploadAvatar from './UploadAvatar';

const EmployeeForm = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            avatar: '',
            fullName: '',
            email: '',
            phoneNumber: '',
            locationName: '',
            workPostcode: '',
            homePostcode: '',
            division: '',
            jobTitle: '',
        },
        // validationSchema: validationSchema,
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
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                        pb={'12px'}
                    >
                        Individual Upload
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <FormikProvider value={values as any}>
                    <Form
                        onSubmit={handleSubmit}
                        autoComplete={'off'}
                    >
                        <UploadAvatar
                            avatar={values.avatar}
                            onUploaded={(file: File | string) => setFieldValue('avatar', file)}
                            onRemove={() => setFieldValue('avatar', '')}
                        />
                    </Form>

                </FormikProvider>

            </Stack>
        </Dialog>
    );
};

export default EmployeeForm;