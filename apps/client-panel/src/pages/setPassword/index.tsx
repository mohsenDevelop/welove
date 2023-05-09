import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SetPassHeader from './components/SetPassHeader';
import SetPassForm from './components/SetPassForm';

const SetPasswordPage = () => {
    return (
        <Stack
            height={'100vh'}
        >
            <SetPassHeader />

            <Stack
                pt={'60px'}
                alignItems={'center'}
            >
                <Typography
                    variant={'h1'}
                    fontSize={48}
                    fontWeight={700}
                    pb={'24px'}
                >
                    Set Password
                </Typography>

                <Typography
                    fontSize={16}
                    fontWeight={400}
                    pb={'44px'}
                    lineHeight={'26px'}
                    maxWidth={467}
                >
                    Lorem ipsum dolor sit amet consectetur. Cras ultricies maecenas malesuada et tempus feugiat egestas vulputate.
                </Typography>

                <SetPassForm />

            </Stack>

        </Stack>
    );
};

export default SetPasswordPage;