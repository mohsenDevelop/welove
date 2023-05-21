import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Paper, colorPalette } from 'ui';

const PendingPointes = () => {
    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 24px'
            }}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography
                    fontSize={17}
                    fontWeight={600}
                >
                    Pending Points
                </Typography>

                <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={colorPalette.pink200}
                >
                    Show all
                </Typography>

            </Stack>
        </Paper>
    );
};

export default PendingPointes;