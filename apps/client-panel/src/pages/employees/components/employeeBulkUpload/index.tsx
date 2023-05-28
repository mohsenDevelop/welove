import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Dialog,
} from 'ui';
import { CloseIcon } from 'assets-ui';
import UploadFile from './UploadFile';
import EmployeesList from './EmployeesList';

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

const EmployeeBulkUpload = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fileUploaded: null,
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
                        Bulk Upload
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />

                </Stack>

                <FormikProvider value={values as any}>
                    <Form
                        onSubmit={handleSubmit}
                        autoComplete={'off'}
                    >
                        <UploadFile
                            fileUploaded={values.fileUploaded}
                            onUploaded={(file: File | string) => setFieldValue('fileUploaded', file)}
                            onRemove={() => setFieldValue('fileUploaded', '')}
                        />

                        <EmployeesList />
                    </Form>
                </FormikProvider>

            </Stack>
        </Dialog>
    );
};

export default EmployeeBulkUpload;