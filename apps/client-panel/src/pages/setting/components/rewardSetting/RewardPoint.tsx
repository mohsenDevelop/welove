import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Button, colorPalette, TextField } from 'ui';
import { EditIcon } from 'assets-ui';
import { Helper } from 'utils';

const RewardPoint = () => {

    const [mode, setMode] = useState<'add' | 'edit'>('edit');
    const [inputValue, setInputValue] = useState<string>('');

    const handleEdit = () => {
        setMode('add');
    };

    const handleSave = () => {
        return;
    };

    return (
        <Stack gap={'24px'}>
            <Stack
                gap={'10px'}
                width={304}
            >
                <Typography fontSize={14} fontWeight={500}>Point</Typography>
                <TextField
                    placeholder={''}
                    fullWidth={true}
                    onChange={(event) => setInputValue(event.target.value)}
                    value={mode === 'edit' ? Helper.threeDigitSeparator(inputValue) : inputValue}
                    inputProps={{
                        autoComplete: 'off',
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                £
                            </InputAdornment>
                        ),
                        readOnly: mode === 'edit'
                    }}
                />
            </Stack>


            {
                mode === 'edit' ?
                    <Button
                        variant={'contained'}
                        LabelColor={colorPalette.pink200}
                        backgroundColor={colorPalette.white}
                        startIcon={<EditIcon />}
                        sx={{
                            '& .MuiButton-startIcon': {
                                '& svg > path': {
                                    stroke: colorPalette.pink200
                                }
                            },
                            width: 90
                        }}
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    :

                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'10px'}
                    >
                        <Button
                            variant={'outlined'}
                            borderWidth={'0px'}
                            LabelColor={colorPalette.gray900}
                            onClick={() => setMode('edit')}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={'contained'}
                            type={'button'}
                            backgroundColor={colorPalette.pink200}
                            LabelColor={colorPalette.white}
                            sx={{ width: 98, fontWeight: 600 }}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Stack>
            }

        </Stack>
    );
};

export default RewardPoint;