import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ReportsHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'24px'}
        >
            <Typography variant={'h1'}>Reports</Typography>
        </Stack>
    );
};

export default ReportsHeader;