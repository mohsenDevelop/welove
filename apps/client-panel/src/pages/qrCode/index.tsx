import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Dialog,
    colorPalette,
    Button
} from 'ui';
import { CloseIcon } from 'assets-ui';
import {
    QrCodeIcon
} from 'assets-ui';

const QrCodeDialog = () => {

    const navigate = useNavigate();

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'520px'}
        >
            <Stack
                p={'34px 34px 24px 34px'}
            >
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    pb={'31px'}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                    >
                        Scan QR Code
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                    color={colorPalette.gray550}
                    pb={'39px'}
                >
                    Lorem ipsum dolor sit amet consectetur. Dictum a id facilisi orci habitant venenatis eu.
                </Typography>

                <Stack
                    bgcolor={colorPalette.gray12}
                    borderRadius={'10px'}
                    mb={'39px'}
                    alignItems={'center'}
                >
                    <QrCodeIcon style={{ width: 242, height: 242 }} />
                </Stack>

                <Button
                    variant={'contained'}
                    type={'button'}
                    fullWidth={true}
                    backgroundColor={colorPalette.purple}
                    LabelColor={colorPalette.white}
                >
                    Or try to login again
                </Button>

            </Stack>
        </Dialog>
    );
};

export default QrCodeDialog;