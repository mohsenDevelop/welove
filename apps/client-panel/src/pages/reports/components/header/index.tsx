import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import WorkspaceMenu from '../WorkspaceMenu';
import DateRange from '../DateRange';

const ReportsHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'24px'}
        >
            <Typography variant={'h1'}>Reports</Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'20px'}
            >
                <WorkspaceMenu />
                <DateRange />

            </Stack>
        </Stack>
    );
};

export default ReportsHeader;