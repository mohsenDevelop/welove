import * as Yup from 'yup';

export interface initialValuesProps {
    img: string,
    firstName: string,
    lastName: string,
    email: string,
}

export const initialValues = {
    img: '',
    firstName: '',
    lastName: '',
    email: 'Press@gmail.com',
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is Not valid').required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    img: Yup.string(),
});