import * as Yup from 'yup';

export interface initialValuesProps {
    email: string;
    fullName: string;
    phoneNumber: string;
    companyNumber: string;
    description: string;
}

export const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    companyNumber: 'Sellstaged Ltd',
    description: '',
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is Not valid').required('Email is required'),
    fullName: Yup.string().required('Full name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    companyNumber: Yup.string().required('Company number is required'),
    description: Yup.string().required('Description is required'),
});