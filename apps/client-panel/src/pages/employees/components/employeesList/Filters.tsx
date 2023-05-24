import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Filters: FC<EmployeesFiltersProps> = ({ renderSearch }) => {
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

            </Stack>
        </Stack>
    );
};

export interface EmployeesFiltersProps {
    renderSearch: () => ReactNode;
}

export default Filters;