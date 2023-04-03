import { FC, useState } from 'react';

import { SearchIcon } from 'assets-ui';
import { TextField } from '../input/TextField';
import { Container } from '../container/Container';
import { colorPalette } from '../colors';
import Stack from '@mui/material/Stack';

export const ReataurantSearch: FC<{ onData: any }> = ({ onData }) => {

    const [inspire, setInspire] = useState('');
    const [place, setPlace] = useState('');

    return (
        <Stack bgcolor={colorPalette.green300} p={'10px 0'} mb={'33px'}>
            <Container>
                <Stack flexDirection={'row'} gap={'7px'} alignItems={'center'}>
                    <TextField
                        placeholder='Get inspired'
                        sx={{ width: '300px' }}
                        onChange={(e: any) => setInspire(e.target.value)}
                    />
                    <TextField
                        placeholder='Where in the world'
                        sx={{ width: '300px' }}
                        onChange={(e: any) => setPlace(e.target.value)}
                    />

                    <Stack
                        sx={{ cursor: 'pointer', marginLeft: '4px' }}
                        onClick={() => onData({ inspire, place })}
                    >
                        <SearchIcon />
                    </Stack>

                </Stack>
            </Container>
        </Stack>
    );
};