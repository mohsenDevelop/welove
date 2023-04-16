import * as Yup from 'yup';

export interface initialValuesProps {
    email: string,
    fullName: string
}

export const initialValues = {
    email: '',
    fullName: '',
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is Not valid').required('Email is required'),
    fullName: Yup.string().required('FullName is required'),
});