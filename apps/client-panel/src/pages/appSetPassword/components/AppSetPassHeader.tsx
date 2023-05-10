import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AppSetPassHeader = () => {
    return (
        <Stack
            height={70}
            borderBottom={'1px solid rgba(0, 0, 0, 0.26)'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Typography
                variant={'h1'}
            >
                Logo
            </Typography>
        </Stack>
    );
};

export default AppSetPassHeader;