import { useFormikContext } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    TextField
} from 'ui';

const LinkFormItem = () => {

    const { getFieldProps } = useFormikContext();

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'47px'}
        >
            <Stack
                gap={'6px'}
                flex={1}
            >
                <Typography
                    fontSize={16}
                    fontWeight={500}
                >
                    * Link
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                >
                    Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                </Typography>

            </Stack>

            <TextField
                {...getFieldProps('link')}
                sx={{ flex: 1 }}
            />
        </Stack>
    );
};

export default LinkFormItem;