import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { colorPalette, Button, TextField } from 'ui';
import { EditIcon } from 'assets-ui';
import { Helper } from 'utils';

const ShareJob = () => {

    const [mode, setMode] = useState<'add' | 'edit'>('edit');
    const [inputValue, setInputValue] = useState<string>('');

    const handleEdit = () => {
        setMode('add');
    };

    const handleSave = () => {
        return;
    };

    return (
        <Stack
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            py={'38px'}
            gap={'24px'}
        >
            <Typography
                color={colorPalette.blue800}
                fontSize={18}
                fontWeight={600}
            >
                Share a Job
            </Typography>

            <Stack
                gap={'10px'}
                maxWidth={304}
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

export default ShareJob;