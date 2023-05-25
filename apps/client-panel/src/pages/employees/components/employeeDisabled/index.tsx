import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    Dialog,
    colorPalette,
    Button,
} from 'ui';
import { CloseIcon, DisabledTableIcon } from 'assets-ui';

const EmployeeDisabledDialog = () => {

    const navigate = useNavigate();

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'420px'}
        >

            <Stack
                p={'34px 34px 24px 34px'}
            >

                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    pb={'16px'}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bgcolor={colorPalette.gray22}
                        border={`8px solid ${colorPalette.gray5}`}
                        width={56}
                        height={56}
                        borderRadius={'50%'}
                    >
                        <DisabledTableIcon />
                    </Box>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <Stack>
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                        pb={'10px'}
                    >
                        Disabled
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        pb={'28px'}
                        sx={{ opacity: .8 }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Quis magna quam nunc augue.
                    </Typography>

                    <Stack
                        flexDirection={'row-reverse'}
                        gap={'15px'}
                    >
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            backgroundColor={colorPalette.pink200}
                            LabelColor={colorPalette.white}
                            sx={{ width: 111 }}
                        >
                            Disabled
                        </Button>

                        <Button
                            variant={'outlined'}
                            type={'button'}
                            LabelColor={colorPalette.gray900}
                            borderColor={colorPalette.white}
                            sx={{ width: 114 }}
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>

                    </Stack>
                </Stack>

            </Stack>

        </Dialog>
    );
};

export default EmployeeDisabledDialog;