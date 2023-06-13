import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import { Button, colorPalette, TextField } from 'ui';
import {
    TrashTableIcon,
} from 'assets-ui';

const AddVoucher = () => {

    const [mode, setMode] = useState<'add' | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string>('');

    const handleAddVoucher = () => {
        setMode('add');
    };

    const handleDelete = () => {
        setMode(undefined);
    };

    return (
        <Stack>
            {
                mode === 'add'
                    ?
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
                                                borderColor={'rgba(229, 31, 55, 0.15)'}
                                                LabelColor={colorPalette.red200}
                                                sx={{ height: 30, width: 100 }}
                                                startIcon={<TrashTableIcon style={{ width: '18px', height: '18px' }} />}
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant={'contained'}
                                                backgroundColor={colorPalette.pink200}
                                                LabelColor={colorPalette.white}
                                                sx={{ height: 30, width: 89, fontWeight: 600 }}
                                                startIcon={<CheckOutlinedIcon sx={{ width: '18px', height: '18px', color: colorPalette.white }} />}
                                            >
                                                Save
                                            </Button>
                                        </Stack>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    :
                    null
            }
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'6px'}
                pt={'12px'}
                sx={{ cursor: 'pointer' }}
                onClick={handleAddVoucher}
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
        </Stack>
    );
};

export default AddVoucher;