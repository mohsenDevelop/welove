import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Button, colorPalette } from 'ui';
import {
    UserFillIcon
} from 'assets-ui';

const ClientsHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'35px 0px'}
            sx={{
                '& button > span > svg > path': {
                    fill: colorPalette.white
                }
            }}
        >
            <Typography variant={'h1'} > Clients</Typography>

            <Button
                variant={'contained'}
                backgroundColor={colorPalette.purple}
                LabelColor={colorPalette.white}
                startIcon={<UserFillIcon style={{ width: 24, height: 24 }} />}
                sx={{
                    width: 184,
                    height: 48,
                    fontWeight: 700
                }}
            >
                Add New Clients
            </Button>
        </Stack>
    );
};

export default ClientsHeader;