import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Button, colorPalette, TextField } from 'ui';
import {
    TrashTableIcon,
} from 'assets-ui';

const VoucherList = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleDelete = () => {
        return;
    };

    return (
        <Stack
            gap={'28px'}
        >
            <Stack
                gap={'10px'}
            >
                <Typography fontSize={14} fontWeight={500}>Title</Typography>
                <TextField
                    placeholder={''}
                    fullWidth={true}
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
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
                                        borderColor={colorPalette.red200}
                                        LabelColor={colorPalette.red200}
                                        sx={{ height: 30, width: 100, fontWeight: 600 }}
                                        startIcon={<TrashTableIcon style={{ width: '18px', height: '18px' }} />}
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </Stack>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default VoucherList;