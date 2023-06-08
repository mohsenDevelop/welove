import * as Yup from 'yup';

export interface initialValuesProps {
    email: string,
    password: string
}

export const initialValues = {
    email: '',
    password: '',
    recaptcha: '',
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is Not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
    // recaptcha: Yup.string().required('Please check recaptcha'),
});