import { FC } from 'react';
import CircularProgress, {
    CircularProgressProps,
    circularProgressClasses
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { colorPalette } from '../colors';

export interface CircularStatisticsProgressProps extends CircularProgressProps {
    activeValue: number;
    activeColor: string;
}

export const StatisticsProgress: FC<CircularStatisticsProgressProps> = (props) => {
    return (
        <Box
            display={'inline-flex'}
            sx={{
                position: 'relative',
            }}
        >
            <CircularProgress
                variant={'determinate'}
                size={props.size}
                thickness={5}
                sx={{
                    color: colorPalette.gray9,
                }}
                {...props}
                value={100}
            />
            <CircularProgress
                variant={'determinate'}
                disableShrink
                sx={{
                    color: props.activeColor ?? colorPalette.gray9,
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    }
                }}
                size={props.size}
                thickness={5}
                value={props.activeValue ?? 0}
                {...props}
            />
        </Box>
    );
};