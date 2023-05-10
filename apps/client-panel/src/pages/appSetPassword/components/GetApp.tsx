import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Button,
    colorPalette
} from 'ui';
import {
    QrCodeIcon
} from 'assets-ui';
import { QRCODE_URL } from '@config/urls';

const GetApp = () => {

    const navigate = useNavigate();

    return (
        <Stack
            border={'1px solid rgba(39, 64, 82, 0.2)'}
            borderRadius={'32px'}
            alignItems={'center'}
            mt={'52px'}
            p={'24px 49px 34px 49px'}
            width={548}
        >
            <Typography
                variant={'h1'}
                fontSize={18}
                fontWeight={600}
                pb={'42px'}
            >
                Get Welove9am App for free
            </Typography>

            <Stack
                flexDirection={'row'}
                gap={'15px'}
                width={'100%'}
            >
                <Button
                    fullWidth={true}
                    variant={'outlined'}
                    LabelColor={colorPalette.gray900}
                    borderColor={'rgba(39, 64, 82, 0.25)'}
                    startIcon={<QrCodeIcon />}
                    onClick={() => navigate(QRCODE_URL)}
                >
                    Scan QR Code
                </Button>

                <Button
                    fullWidth={true}
                    variant={'outlined'}
                    LabelColor={colorPalette.pink200}
                    borderColor={'rgba(39, 64, 82, 0.25)'}
                    startIcon={<FileDownloadOutlinedIcon style={{ color: colorPalette.pink200 }} />}
                >
                    Get Welove9am App
                </Button>

            </Stack>
        </Stack>
    );
};

export default GetApp;