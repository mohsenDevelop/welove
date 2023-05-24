import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';

import {
    Dialog,
    colorPalette,
    TextField,
    Button,
    DivisionMenu
} from 'ui';
import { CloseIcon, EyeIcon } from 'assets-ui';
import UploadAvatar from './UploadAvatar';

const divisionList = [
    {
        id: '1',
        name: 'IT'
    },
    {
        id: '2',
        name: 'Human Resources'
    },
]

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
                    pb={'47px'}
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

                        <Stack gap={'24px'} pt={'28px'}>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Employee Full name</Typography>
                                <TextField
                                    placeholder={'e.g, Tom Hardy'}
                                    fullWidth={true}
                                    {...getFieldProps('fullName')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.fullName && errors.fullName)}
                                    helperText={touched.fullName && errors.fullName}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Email</Typography>
                                <TextField
                                    placeholder={''}
                                    fullWidth={true}
                                    {...getFieldProps('email')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Phone Number</Typography>
                                <TextField
                                    placeholder={''}
                                    fullWidth={true}
                                    {...getFieldProps('phoneNumber')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                                    helperText={touched.phoneNumber && errors.phoneNumber}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Location Name</Typography>
                                <TextField
                                    placeholder={''}
                                    fullWidth={true}
                                    {...getFieldProps('locationName')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.locationName && errors.locationName)}
                                    helperText={touched.locationName && errors.locationName}
                                />
                            </Stack>

                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                gap={'4px'}
                            >
                                <Stack
                                    gap={'10px'}
                                    flex={1}
                                >
                                    <Typography fontSize={14} fontWeight={500}>Work postcode</Typography>
                                    <TextField
                                        placeholder={''}
                                        fullWidth={true}
                                        {...getFieldProps('workPostcode')}
                                        inputProps={{
                                            autoComplete: 'off',
                                        }}
                                        error={Boolean(touched.workPostcode && errors.workPostcode)}
                                        helperText={touched.workPostcode && errors.workPostcode}
                                    />
                                </Stack>

                                <Stack
                                    gap={'10px'}
                                    flex={1}
                                >
                                    <Typography fontSize={14} fontWeight={500}>Home postcode</Typography>
                                    <TextField
                                        placeholder={''}
                                        fullWidth={true}
                                        {...getFieldProps('homePostcode')}
                                        inputProps={{
                                            autoComplete: 'off',
                                        }}
                                        error={Boolean(touched.homePostcode && errors.homePostcode)}
                                        helperText={touched.homePostcode && errors.homePostcode}
                                    />
                                </Stack>

                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Division</Typography>
                                <DivisionMenu
                                    list={divisionList}
                                    height={44}
                                    radiusBorder={'17px'}
                                    value={values.division}
                                    onChange={(event: any) => setFieldValue('division', event.target.value as string)}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>Job title</Typography>
                                <TextField
                                    placeholder={''}
                                    fullWidth={true}
                                    {...getFieldProps('jobTitle')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.jobTitle && errors.jobTitle)}
                                    helperText={touched.jobTitle && errors.jobTitle}
                                />
                            </Stack>

                            <Stack
                                flexDirection={'row-reverse'}
                                gap={'15px'}
                            >
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.pink200}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 99 }}
                                >
                                    Save
                                </Button>

                                <Button
                                    variant={'outlined'}
                                    type={'button'}
                                    borderColor={colorPalette.white}
                                    LabelColor={colorPalette.blue800}
                                    sx={{ width: 114 }}
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

export default EmployeeForm;