import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette, Button } from 'ui';
import { EditIcon } from 'assets-ui';
import { OFFER_SETTING_ADMIN_URL } from '@config/urls';

const OfferItem = () => {

    const navigate = useNavigate();

    return (
        <Stack>
            <Typography
                fontSize={14}
                fontWeight={600}
                pb={'10px'}
            >
                3 months down the line
            </Typography>

            <Stack
                display={'grid'}
                gridTemplateColumns={'repeat(3, 233px)'}
                gap={'24px'}
            >
                <Stack
                    justifyContent={'center'}
                    border={'1px solid rgba(39, 64, 82, 0.25)'}
                    borderRadius={'17px'}
                    pl={'14px'}
                    height={44}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        color={colorPalette.blue800}
                    >
                        £ 25.00 + 10 Points
                    </Typography>
                </Stack>
                <Stack
                    justifyContent={'center'}
                    border={'1px solid rgba(39, 64, 82, 0.25)'}
                    borderRadius={'17px'}
                    pl={'14px'}
                    height={44}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        color={colorPalette.blue800}
                    >
                        Love 2 Shop - Voucher 1
                    </Typography>
                </Stack>
                <Stack
                    justifyContent={'center'}
                    border={'1px solid rgba(39, 64, 82, 0.25)'}
                    borderRadius={'17px'}
                    pl={'14px'}
                    height={44}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        color={colorPalette.blue800}
                    >
                        Love 2 Shop - Voucher 2
                    </Typography>
                </Stack>
            </Stack>

            <Button
                variant={'contained'}
                LabelColor={colorPalette.pink200}
                backgroundColor={colorPalette.white}
                startIcon={<EditIcon />}
                sx={{
                    '& .MuiButton-startIcon': {
                        '& svg > path': {
                            stroke: colorPalette.pink200
                        }
                    },
                    width: 90,
                    mt: '24px'
                }}
                onClick={() => navigate(OFFER_SETTING_ADMIN_URL)}
            >
                Edit
            </Button>
        </Stack>
    );
};

export default OfferItem;