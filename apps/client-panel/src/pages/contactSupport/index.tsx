import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper } from 'ui';
import ContactForm from './components/ContactForm';

const ContactSupportPage = () => {
    return (
        <Stack>
            <Typography
                variant={'h1'}
                pb={'12px'}
            >
                Contact Support
            </Typography>

            <Typography
                variant={'h1'}
                fontSize={14}
                fontWeight={400}
                pb={'38px'}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis
            </Typography>

            <Paper
                type={'client'}
                sx={{
                    p: '24px 27px 24px 24px',
                    maxWidth: 600
                }}
            >
                <ContactForm />
            </Paper>
        </Stack>
    );
};

export default ContactSupportPage;