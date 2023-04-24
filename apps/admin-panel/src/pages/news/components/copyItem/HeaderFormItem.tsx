import { FC } from 'react';
import { useFormikContext } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    TextField
} from 'ui';

const HeaderFormItem: FC<any> = () => {

    const { values, getFieldProps } = useFormikContext();
    console.log({ values });

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
                    * Header
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                >
                    Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                </Typography>

            </Stack>

            <TextField
                {...getFieldProps('header')}
                sx={{ flex: 1 }}
            />
        </Stack>
    );
};
export default HeaderFormItem;