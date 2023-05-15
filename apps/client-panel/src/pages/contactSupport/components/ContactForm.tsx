import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette, Button, TextField, TextArea } from 'ui';
import { initialValues, validationSchema, initialValuesProps } from '@formValidations/contactSupport';

const ContactForm = () => {

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
                    gap={'28px'}
                >

                    <Stack
                        gap={'10px'}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <Typography fontSize={14} fontWeight={500}>Full name</Typography>
                            <Typography variant={'h1'} fontSize={12} fontWeight={400}>All forms are required</Typography>
                        </Box>

                        <TextField
                            placeholder={'e.g ...'}
                            fullWidth={true}
                            {...getFieldProps('fullName')}
                            error={Boolean(touched.fullName && errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                        />
                    </Stack>

                    <Stack
                        gap={'10px'}
                    >
                        <Typography fontSize={14} fontWeight={500}>Email</Typography>

                        <TextField
                            placeholder={'e.g ...'}
                            fullWidth={true}
                            {...getFieldProps('email')}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                        />
                    </Stack>

                    <Stack
                        gap={'10px'}
                    >
                        <Typography fontSize={14} fontWeight={500}>Phone number</Typography>

                        <TextField
                            placeholder={'e.g ...'}
                            fullWidth={true}
                            {...getFieldProps('phoneNumber')}
                            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                        />
                    </Stack>

                    <Stack
                        gap={'10px'}
                    >
                        <Typography fontSize={14} fontWeight={500}>Company Name</Typography>

                        <TextField
                            placeholder={'e.g ...'}
                            fullWidth={true}
                            disabled={true}
                            {...getFieldProps('companyNumber')}
                            error={Boolean(touched.companyNumber && errors.companyNumber)}
                            helperText={touched.companyNumber && errors.companyNumber}
                        />
                    </Stack>

                    <Stack
                        gap={'10px'}
                    >
                        <Typography fontSize={14} fontWeight={500}>Description</Typography>

                        <TextArea
                            placeholder={'e.g ...'}
                            fullWidth={true}
                            multiline={true}
                            rows={8}
                            maxRows={8}
                            minRows={8}
                            {...getFieldProps('description')}
                            error={Boolean(touched.description && errors.description)}
                            helperText={touched.description && errors.description}
                        />
                    </Stack>

                    <Button
                        variant={'contained'}
                        LabelColor={colorPalette.white}
                        backgroundColor={colorPalette.purple}
                        fullWidth={false}
                        disabled={!isValid}
                        sx={{ width: 155 }}
                    >
                        Send Request
                    </Button>

                </Stack>
            </Form>
        </FormikProvider>
    );
};

export default ContactForm;