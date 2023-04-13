import * as Yup from 'yup';
import { ValidationHelper } from 'utils';

export interface initialValuesProps {
    oldPassword: string,
    newPassword: string,
    rePassword: string,
}

export const initialValues = {
    oldPassword: '',
    newPassword: '',
    rePassword: '',
};

export const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().min(12, 'Must be more than 12 characters').test('oldPassword', 'A combination of uppercase letters, lowercase letters, numbers, symbols', (value) => value ? ValidationHelper.checkPasswordComplexity(value) : false).required('Password is required'),
    newPassword: Yup.string().min(12, 'Must be more than 12 characters').test('newPassword', 'A combination of uppercase letters, lowercase letters, numbers, symbols', (value) => value ? ValidationHelper.checkPasswordComplexity(value) : false).required('Password is required'),
    rePassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match').required('Please re-enter password')
});