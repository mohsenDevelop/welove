import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import MangeVouchersButton from './manageVouchers/MangeVouchersButton';

const RewardSettings = () => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Typography
                    color={colorPalette.blue800}
                    fontSize={18}
                    fontWeight={600}
                >
                    Rerward settings
                </Typography>

            </Stack>

            <MangeVouchersButton />
        </Stack>
    )
}

export default RewardSettings