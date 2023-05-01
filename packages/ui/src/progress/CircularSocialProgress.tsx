import { FC } from 'react';
import CircularProgress, {
    CircularProgressProps,
    circularProgressClasses
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { colorPalette } from '../colors';

export interface CircularSocialProgressProps extends CircularProgressProps {
    value: number
}

export const CircularSocialProgress: FC<CircularSocialProgressProps> = (props) => {
    return (
        <Box
            display={'inline-flex'}
            sx={{
                position: 'relative',
            }}
        >
            <CircularProgress
                variant={'determinate'}
                size={43}
                thickness={4}
                sx={{
                    color: colorPalette.gray200,
                }}
                {...props}
                value={100}
            />
            <CircularProgress
                variant={'determinate'}
                disableShrink
                sx={{
                    color: props.value < 20 ? colorPalette.lightGreen400 : colorPalette.green350,
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round'
                    }
                }}
                size={43}
                thickness={4}
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    fontSize={12}
                    fontWeight={500}
                    component={'div'}
                    color={colorPalette.blue920}
                >
                    {`${props.value}%`}
                </Typography>
            </Box>
        </Box>
    );
};