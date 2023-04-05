import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Button, colorPalette } from 'ui';

const AdminNotifHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >
            <Typography variant={'h1'} fontSize={17} fontWeight={600}>Admin Notifications</Typography>
            <Button
                variant={'outlined'}
                borderColor={'rgba(39, 64, 82, 0.15)'}
                LabelColor={colorPalette.purple}
                sx={{
                    fontSize: 13,
                    fontWeight: 500
                }}
            >
                Show all
            </Button>
        </Stack>
    );
};

export default AdminNotifHeader;