import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    colorPalette
} from 'ui';

const lists = [
    {
        id: '1',
        title: 'Facebook',
        count: 12,
    },
    {
        id: '2',
        title: 'Email',
        count: 4,
    },
    {
        id: '3',
        title: 'WhatsApp',
        count: 10,
    },
    {
        id: '4',
        title: 'Social media 1',
        count: 25,
    },
];

const TopNetworksList = () => {
    return (
        <Stack
            flexDirection={'row'}
            flexWrap={'wrap'}
            columnGap={'88px'}
            rowGap={'44px'}
            pt={'24px'}
        >
            {
                lists.map((_el) => (
                    <Stack
                        key={_el.id}
                        maxWidth={283}
                    >
                        <Typography
                            fontSize={14}
                            fontWeight={400}
                            pb={'10px'}
                        >
                            {_el.title}
                        </Typography>

                        <Typography
                            fontSize={14}
                            fontWeight={500}
                            color={colorPalette.blue800}
                        >
                            <Typography
                                component={'span'}
                                fontSize={19}
                                fontWeight={700}
                                color={colorPalette.blue800}
                                pr={'6px'}
                            >
                                {_el.count}
                            </Typography>

                            shares
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    );
};

export default TopNetworksList;