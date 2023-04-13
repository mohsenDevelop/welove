import { FC, ReactNode } from 'react';
import MuiDialog from '@mui/material/Dialog';

import { Transition } from './Transiation';

export interface DialogProps {
    children: ReactNode,
    width: string,
    open: boolean,
    onClose: () => void;
}

export const Dialog: FC<DialogProps> = ({ open, onClose, width, children }) => {
    return (
        <MuiDialog
            open={open}
            onClose={onClose}
            scroll={'paper'}
            maxWidth={'xs'}
            fullWidth={true}
            TransitionComponent={Transition}
            sx={{
                '& div.MuiDialog-paper': {
                    width: width ? width : '100%',
                    minWidth: width ? width : '100%',
                    borderRadius: '20px',
                }
            }}
        >
            {children}
        </MuiDialog>

    );
};