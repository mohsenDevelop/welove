import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';

import {
    colorPalette
} from 'ui';
import { Helper } from 'utils';

const lists = [
    {
        id: '1',
        title: 'Facebook',
        count: 1500,
    },
    {
        id: '2',
        title: 'WhatsApp ',
        count: 1392,
    },
    {
        id: '3',
        title: 'Email',
        count: 592,
    },
    {
        id: '4',
        title: 'SM1',
        count: 340,
    },
];

const TopMediaList = () => {
    return (
        <Stack
            flexDirection={'row'}
            flexWrap={'wrap'}
            columnGap={'24px'}
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
                            fontSize={15}
                            fontWeight={500}
                            color={colorPalette.black}
                            pb={'10px'}
                        >
                            {`${_el.id}. ${_el.title}`}
                        </Typography>

                        <Typography
                            fontSize={34}
                            fontWeight={300}
                            color={colorPalette.blue800}
                            pb={'18px'}
                        >
                            {Helper.threeDigitSeparator(_el.count)}
                        </Typography>

                        <Box
                            display={'flex'}
                            alignItems={'baseline'}
                            gap={'4px'}

                        >
                            <NorthOutlinedIcon sx={{ color: colorPalette.green720, width: 12, height: 14 }} />

                            <Typography
                                fontSize={14}
                                fontWeight={400}
                                color={colorPalette.green720}
                            >
                                {`${Helper.threeDigitSeparator(9034)} lorem ipsum`}
                                <Typography
                                    fontSize={14}
                                    fontWeight={400}
                                    component={'span'}
                                    color={colorPalette.black}
                                    pl={'4px'}
                                    sx={{ opacity: .5 }}
                                >
                                    (+7%) over the last 30 days.
                                </Typography>
                            </Typography>
                        </Box>

                    </Stack>
                ))
            }

        </Stack>
    );
};

export default TopMediaList;