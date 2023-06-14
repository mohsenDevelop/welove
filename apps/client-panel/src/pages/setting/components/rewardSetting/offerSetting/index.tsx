import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import OfferItem from './OfferItem';

const OfferSetting = () => {
    return (
        <Stack
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            py={'38px'}
        >
            <Typography
                color={colorPalette.blue800}
                fontSize={16}
                fontWeight={600}
            >
                Offer settings
            </Typography>
            <Typography
                color={colorPalette.gray550}
                fontSize={14}
                fontWeight={400}
                pb={'38px'}
            >
                Lorem ipsum dolor sit amet consectetur.
            </Typography>

            <OfferItem />
        </Stack>
    );
};

export default OfferSetting;