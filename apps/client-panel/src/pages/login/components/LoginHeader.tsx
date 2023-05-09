import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const LoginHeader = () => {
    return (
        <Stack
            height={70}
            pl={'50px'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.26)'}
            justifyContent={'center'}
        >
            <Typography
                variant={'h1'}
            >
                Logo
            </Typography>
        </Stack>
    );
};

export default LoginHeader;