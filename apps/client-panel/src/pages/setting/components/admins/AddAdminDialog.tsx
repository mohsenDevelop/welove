import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    initialValuesProps,
    initialValues,
    validationSchema
} from '@formValidations/createAdmin';
import {
    Dialog,
    colorPalette,
    Button,
    TextField
} from 'ui';
import { CloseIcon } from 'assets-ui';

const AddAdminDialog = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues as initialValuesProps,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log({ values });
        },
    });

    const { errors, touched, values, isValid, handleSubmit, getFieldProps } = formik;

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
                    Add admin
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
                                <Typography fontSize={14} fontWeight={500}>Full name</Typography>
                                <TextField
                                    placeholder={''}
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
                                <Typography fontSize={14} fontWeight={500}>Email address</Typography>
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
                                flexDirection={'row-reverse'}
                                gap={'8px'}
                            >
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.pink200}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 92 }}
                                >
                                    Add
                                </Button>

                                <Button
                                    variant={'outlined'}
                                    borderColor={colorPalette.white}
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

export default AddAdminDialog;