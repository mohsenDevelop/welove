import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    initialValuesProps,
    initialValues,
    validationSchema
} from '@formValidations/account';
import {
    TextField,
    colorPalette,
    Button
} from 'ui';
import UploadPhoto from './UploadPhoto';

const AccountForm = () => {

    const formik = useFormik({
        initialValues: initialValues as initialValuesProps,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log({ values });
        },
    });

    const { errors, touched, values, isValid, handleSubmit, getFieldProps, setFieldValue } = formik;

    return (
        <>
            <Typography
                variant={'h1'}
                fontSize={20}
                fontWeight={600}
                pb={'7px'}
            >
                Name and photo
            </Typography>

            <Typography
                fontSize={14}
                fontWeight={400}
            >
                Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <FormikProvider value={values as any}>
                <Form
                    onSubmit={handleSubmit}
                    autoComplete={'off'}
                >
                    <Stack
                        width={'100%'}
                        maxWidth={383}
                    >

                        <UploadPhoto onImage={(link: string) => { return; }} />

                        <Stack gap={'24px'}>
                            <Stack
                                gap={'10px'}
                                pt={'24px'}
                            >
                                <Typography fontSize={14} fontWeight={500}>First name</Typography>
                                <TextField
                                    placeholder={'Enter your first name'}
                                    fullWidth={true}
                                    {...getFieldProps('firstName')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500} >Last name</Typography>
                                <TextField
                                    placeholder={'Enter your last name'}
                                    fullWidth={true}
                                    {...getFieldProps('lastName')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    error={Boolean(touched.lastName && errors.lastName)}
                                    helperText={touched.lastName && errors.lastName}
                                />
                            </Stack>

                            <Stack
                                gap={'10px'}
                            >
                                <Typography fontSize={14} fontWeight={500} >Email address</Typography>
                                <TextField
                                    placeholder={'Enter your email'}
                                    fullWidth={true}
                                    {...getFieldProps('email')}
                                    inputProps={{
                                        autoComplete: 'off',
                                    }}
                                    InputProps={{
                                        endAdornment: <Typography
                                            component={'span'}
                                            width={96}
                                            fontSize={12}
                                            fontWeight={400}
                                            color={colorPalette.blue800}
                                        >
                                            non editable
                                        </Typography>
                                    }}
                                    disabled={true}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Stack>

                            <Stack
                                flexDirection={'row'}
                                gap={'16px'}
                            >
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.purple}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 93 }}
                                >
                                    Save
                                </Button>

                                {/* <Button
                                    variant={'outlined'}
                                    borderColor={'rgba(39, 64, 82, 0.15)'}
                                    LabelColor={colorPalette.gray900}
                                >
                                    Cancel
                                </Button> */}

                            </Stack>
                        </Stack>
                    </Stack>
                </Form>
            </FormikProvider>
        </>
    );
};

export default AccountForm;