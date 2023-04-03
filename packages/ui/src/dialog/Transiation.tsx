import { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Fade from '@mui/material/Fade';

export const Transition = forwardRef((
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) => {
    return <Fade ref={ref} {...props} />;
});