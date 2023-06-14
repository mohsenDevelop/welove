import { useNavigate } from 'react-router-dom';
import { Formik, Form, FieldArray } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import {
    Dialog,
    colorPalette,
    Button,
    TextField
} from 'ui';
import { CloseIcon } from 'assets-ui';
import {
    TrashTableIcon,
} from 'assets-ui';
import AddRewardTextField from '../AddRewardTextField';

const EditOfferDialog = () => {

    const navigate = useNavigate();

    const handleSubmit = (values: any) => {

        console.log({ values });
    };

    const handleAddVoucher = () => {
        // setFieldValue()
    };

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
                        Edit - 3 months down the line
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

                <Formik
                    initialValues={{
                        point: '',
                        reward: '',
                        unit: '',
                        vouchers: [],
                    }}
                    // validationSchema={{}}
                    onSubmit={handleSubmit}
                >
                    {
                        ({ handleSubmit, isValid, touched, errors, values, getFieldProps }) => {
                            return (
                                <Form
                                    onSubmit={handleSubmit}
                                    autoComplete={'off'}
                                >
                                    <Stack
                                        width={'100%'}
                                        gap={'24px'}
                                    >

                                        <Stack
                                            flexDirection={'row'}
                                            alignItems={'center'}
                                            gap={'20px'}
                                        >
                                            <Stack
                                                gap={'10px'}
                                                flex={1}
                                            >
                                                <Typography fontSize={14} fontWeight={500}>Add Points</Typography>
                                                <TextField
                                                    placeholder={''}
                                                    fullWidth={true}
                                                    {...getFieldProps('point')}
                                                    inputProps={{
                                                        autoComplete: 'off',
                                                    }}
                                                    error={Boolean(touched.point && errors.point)}
                                                    helperText={touched.point && errors.point}
                                                />
                                            </Stack>

                                            <Stack
                                                gap={'10px'}
                                                flex={1}
                                            >
                                                <Typography fontSize={14} fontWeight={500}>Add Reward</Typography>
                                                <AddRewardTextField />
                                            </Stack>

                                        </Stack>
                                        {
                                            <FieldArray
                                                name={'vouchers'}
                                                render={(arrayHelpers) => {
                                                    return (
                                                        <>
                                                            {
                                                                values.vouchers.length ?
                                                                    values.vouchers.map((_el: string, _index: number) => (
                                                                        <Stack
                                                                            gap={'10px'}
                                                                            key={_index.toString()}
                                                                        >
                                                                            <Typography fontSize={14} fontWeight={500}>Title</Typography>
                                                                            <TextField
                                                                                placeholder={''}
                                                                                fullWidth={true}
                                                                                {...getFieldProps(`vouchers.${_index}`)}
                                                                                inputProps={{
                                                                                    autoComplete: 'off',
                                                                                }}
                                                                                InputProps={{
                                                                                    endAdornment: (
                                                                                        <InputAdornment position='start'>
                                                                                            <Stack
                                                                                                flexDirection={'row'}
                                                                                                alignItems={'center'}
                                                                                                gap={'10px'}
                                                                                                ml={'14px'}
                                                                                                mr={'-14px'}
                                                                                            >
                                                                                                <Button
                                                                                                    variant={'outlined'}
                                                                                                    borderColor={'rgba(229, 31, 55, 0.15)'}
                                                                                                    LabelColor={colorPalette.red200}
                                                                                                    sx={{ height: 30, width: 100 }}
                                                                                                    startIcon={<TrashTableIcon style={{ width: '18px', height: '18px' }} />}
                                                                                                    onClick={() => arrayHelpers.remove(_index)}
                                                                                                >
                                                                                                    Delete
                                                                                                </Button>
                                                                                            </Stack>
                                                                                        </InputAdornment>
                                                                                    ),
                                                                                }}
                                                                            />
                                                                        </Stack>
                                                                    ))
                                                                    :
                                                                    null
                                                            }

                                                            <Stack
                                                                flexDirection={'row'}
                                                                alignItems={'center'}
                                                                gap={'6px'}
                                                                pt={'12px'}
                                                                sx={{ cursor: 'pointer' }}
                                                                onClick={() => arrayHelpers.push('')}
                                                            >
                                                                <AddOutlinedIcon sx={{ color: colorPalette.pink200 }} />
                                                                <Typography
                                                                    color={colorPalette.pink200}
                                                                    fontSize={14}
                                                                    fontWeight={500}
                                                                >
                                                                    Add Voucher
                                                                </Typography>
                                                            </Stack>
                                                        </>
                                                    );
                                                }}
                                            />
                                        }
                                    </Stack>


                                    <Stack
                                        flexDirection={'row-reverse'}
                                        gap={'8px'}
                                        pt={'49px'}
                                    >
                                        <Button
                                            variant={'contained'}
                                            type={'submit'}
                                            backgroundColor={colorPalette.pink200}
                                            LabelColor={colorPalette.white}
                                            disabled={!isValid}
                                            sx={{ width: 171 }}
                                        >
                                            Save Changes
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
                                </Form>
                            );
                        }
                    }

                </Formik>
            </Stack>
        </Dialog>
    );
};

export default EditOfferDialog;