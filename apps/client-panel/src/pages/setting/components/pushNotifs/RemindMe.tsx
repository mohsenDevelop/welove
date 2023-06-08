import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';

import { RemindMenu } from 'ui';

const RemindMe = () => {

    const [reminded, setReminded] = useState('');

    const handleChange = (event: SelectChangeEvent<any>) => {
        setReminded(event.target.value as string);
    };

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            bgcolor={'rgba(45, 172, 194, 0.1)'}
            borderRadius={'25px'}
            p={'35px 24px'}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'16px'}
            >
                <Box
                    width={85}
                    height={85}
                    bgcolor={'#2DACC2'}
                />

                <Stack
                    gap={'8px'}
                >
                    <Typography
                        fontSize={18}
                        fontWeight={600}
                    >
                        Remind me to authorise pending points after:
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Know when your video has been watched and interacted with.
                    </Typography>
                </Stack>
            </Stack>

            <RemindMenu
                onChange={handleChange}
                value={reminded}
            />
        </Stack>
    );
};

export default RemindMe;