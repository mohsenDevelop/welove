import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import {
    Dialog,
    colorPalette,
    RewardCard,
    Button
} from 'ui';
import { CloseIcon } from 'assets-ui';

const ApprovedDialog = () => {

    const navigate = useNavigate();

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'591px'}
        >
            <Stack
                p={'34px 34px 24px 34px'}
            >
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    pb={'30px'}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                        pb={'12px'}
                    >
                        Approve Reward?
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <Stack
                    bgcolor={'rgba(78, 238, 74, 0.12)'}
                    borderRadius={'140px'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'10px'}
                    height={45}
                    pl={'20px'}
                    mb={'12px'}
                >
                    <CheckOutlinedIcon sx={{ color: colorPalette.green900 }} />
                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        color={colorPalette.green900}
                    >
                        We will let John Doe know that this reward has been approved.
                    </Typography>
                </Stack>

                <RewardCard
                    jobTitle={'Job Title Placeholder Text'}
                    point={2423}
                    action={'Hire'}
                    paltform={'Facebook'}
                    employee={'John Doe'}
                    referral={'Carter Donin'}
                    theme={'lightBlue'}
                    actions={null}
                />

                <Stack
                    flexDirection={'row-reverse'}
                    gap={'15px'}
                    pt={'20px'}
                >
                    <Button
                        variant={'contained'}
                        type={'submit'}
                        backgroundColor={colorPalette.pink200}
                        LabelColor={colorPalette.white}
                        sx={{ width: 184 }}
                    >
                        Approve reward
                    </Button>

                    <Button
                        variant={'outlined'}
                        type={'button'}
                        borderColor={colorPalette.white}
                        LabelColor={colorPalette.blue800}
                        sx={{ width: 114 }}
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </Button>

                </Stack>

            </Stack>

        </Dialog>
    );
};

export default ApprovedDialog;