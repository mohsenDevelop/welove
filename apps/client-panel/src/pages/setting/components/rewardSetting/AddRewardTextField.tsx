import { FC } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import {
    TextField,
    UnitMenu
} from 'ui';

const AddRewardTextField: FC<any> = ({ getFieldProps }) => {
    return (
        <TextField
            placeholder={''}
            fullWidth={true}
            // {...getFieldProps('rePassword')}
            inputProps={{
                autoComplete: 'off',
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <UnitMenu />
                    </InputAdornment>
                ),
            }}
        // error={Boolean(touched.rePassword && errors.rePassword)}
        // helperText={touched.rePassword && errors.rePassword}
        />
    );
};

export default AddRewardTextField;