import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Button,
    colorPalette,
} from 'ui';

const RewardClientHeader = () => {
    return (
        <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >
            <Typography
                fontSize={17}
                fontWeight={600}
                variant={'h1'}
            >
                Rewards List
                <Typography
                    component={'span'}
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={600}
                    pl={'8px'}
                >
                    (1,201)
                </Typography>
            </Typography>

            <Button
                variant={'outlined'}
                LabelColor={colorPalette.blue800}
                borderColor={'rgba(39, 64, 82, 0.15)'}
                startIcon={<FileDownloadOutlinedIcon />}
                sx={{
                    fontSize: 13,
                    fontWeight: 500
                }}
            >
                Downlaod csv
            </Button>
        </Stack>
    );
};

export default RewardClientHeader;