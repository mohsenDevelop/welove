import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { PineappleIcon } from 'assets-ui';
import { colorType, colorTypeSvg } from './Actions';

export interface DescriptionProps {
    type: 'restaurant' | 'chef' | 'foodie',
}

const Description: FC<DescriptionProps> = ({ type }) => {

    const [more, setMore] = useState<boolean>(false);

    return (
        <Stack pt={'20px'}>
            <Typography fontSize={21} fontWeight={600}>Momofuku</Typography>
            <Typography fontSize={16} fontWeight={400}>New York, United States</Typography>
            <Box
                display={'flex'}
                flexDirection={'row'}
                pt={'20px'}
                gap={'6px'}
            >
                <PineappleIcon color={colorType[type]} />
                <Typography
                    fontSize={14}
                    fontWeight={600}
                    color={colorType[type]}
                >
                    11+
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={600}
                    color={colorType[type]}
                >
                    Pineapple Recommendations
                </Typography>

            </Box>

            <Box
                pt={'18px'}
            >
                <Typography
                    fontSize={16}
                    fontWeight={300}
                    lineHeight={'23px'}
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: more ? 'none' : '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    Fried rice is the best breakfast…probably make this for breakfast more than anything else. Whatever is leftover in the fridge goes in — also used @momofukugoods soy, savory, and chili crunch.
                    Whatever is leftover in the fridge goes in — also used @momofukugoods soy, savory, and chili crunch.
                </Typography>
                <Typography
                    component={'span'}
                    fontSize={16}
                    fontWeight={400}
                    pl={'2px'}
                    color={colorTypeSvg[type]}
                    sx={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onClick={() => setMore(!more)}
                >
                    {more ? 'Read less' : 'Read more'}
                </Typography>
            </Box>
        </Stack>
    );
};

export default Description;