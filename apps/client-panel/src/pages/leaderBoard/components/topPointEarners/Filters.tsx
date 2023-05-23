import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Filters: FC<TopPointEarnersHeaderProps> = ({ renderSearch, renderLocation, renderDivision }) => {
    return (
        <Stack gap={'24px'}>
            <Typography fontSize={17} fontWeight={600} > All Jobs</Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'15px'}
            >

                {
                    renderSearch()
                }
                {
                    renderLocation()
                }
                {
                    renderDivision()
                }
            </Stack>
        </Stack>
    );
};

export interface TopPointEarnersHeaderProps {
    renderSearch: () => ReactNode;
    renderLocation: () => ReactNode;
    renderDivision: () => ReactNode;
}

export default Filters;