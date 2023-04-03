import { FC } from 'react';
import MuiContainer, { ContainerProps } from '@mui/material/Container';

export const Container: FC<ContainerProps> = ({ children, ...other }) => {
    return (

        <MuiContainer maxWidth='lg' {...other}>
            {children}
        </MuiContainer>
    );
};