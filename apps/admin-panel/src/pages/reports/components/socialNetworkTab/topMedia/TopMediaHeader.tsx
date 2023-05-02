import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    colorPalette
} from 'ui';

const TopMediaHeader = () => {
    return (
        <Stack
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >
            <Stack
                gap={'8px'}
            >

                <Typography
                    variant={'h1'}
                    fontSize={17}
                    fontWeight={600}
                >
                    Top social media by hires
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    color={colorPalette.gray550}
                >
                    Lorem ispum...
                </Typography>
            </Stack>
        </Stack>
    );
};

export default TopMediaHeader;