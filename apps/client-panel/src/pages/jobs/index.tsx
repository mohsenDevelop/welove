import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import JobsTabs from './components/JobsTabs';

const JobsPage = () => {
    return (
        <Stack gap={'24px'}>
            <Typography variant={'h1'} pt={'24px'}>Jobs</Typography>
            <JobsTabs />
        </Stack>
    );
};

export default JobsPage;