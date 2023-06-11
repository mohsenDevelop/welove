import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Dialog,
    colorPalette,
    Button
} from 'ui';
import { CloseIcon } from 'assets-ui';
import AddVoucher from './AddVoucher';
import VoucherList from './VoucherList';

const VouchersDialog = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            vouchers: []
        },
        validationSchema: {},
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
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    pb={'12px'}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                    >
                        Manage Vouchers
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                    color={colorPalette.gray550}
                    pb={'28px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit.
                </Typography>

                <Stack gap={'28px'}>
                    <VoucherList />
                    <AddVoucher />
                </Stack>

            </Stack>
        </Dialog>
    );
};

export default VouchersDialog;