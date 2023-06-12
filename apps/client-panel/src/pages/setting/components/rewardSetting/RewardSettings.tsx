import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import MangeVouchersButton from './manageVouchers/MangeVouchersButton';
import RewardPoint from './RewardPoint';

const RewardSettings = () => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'38px'}
        >
            <Stack
                gap={'24px'}
            >
                <Typography
                    color={colorPalette.blue800}
                    fontSize={18}
                    fontWeight={600}
                >
                    Rerward settings
                </Typography>

                <RewardPoint />

            </Stack>

            <MangeVouchersButton />
        </Stack>
    )
}

export default RewardSettings