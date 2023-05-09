import { useFormikContext } from 'formik';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
    TextField
} from 'ui';

const Address = () => {

    const { getFieldProps } = useFormikContext();

    return (
        <Grid
            container={true}
            direction={'row'}
            alignItems={'center'}
            wrap={'nowrap'}
            gap={'47px'}
        >

            <Grid
                item={true}
                md={5}
            >


                <Stack
                    gap={'6px'}
                    flex={1}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        * Address
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                    </Typography>

                </Stack>

            </Grid>

            <Grid
                item={true}
                md={7}
            >

                <TextField
                    {...getFieldProps('address')}
                    fullWidth={true}
                />

            </Grid>
        </Grid>

    );
};

export default Address;