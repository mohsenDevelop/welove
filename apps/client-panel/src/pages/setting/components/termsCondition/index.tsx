import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Button, colorPalette } from 'ui';
import { EditIcon } from 'assets-ui';
import { POLICY_ADMIN_URL, POLICY_URL } from '@config/urls';

const TermsConditionTab = () => {

    const navigate = useNavigate();

    return (
        <Stack
            gap={'24px'}
            pt={'24px'}
        >
            <Stack
                width={'100%'}
                border={'1px solid rgba(0, 0, 0, 0.08)'}
                borderRadius={'12px'}
                p={'24px 17px 24px 24px'}
                bgcolor={colorPalette.white}
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(POLICY_ADMIN_URL)}
            >
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >

                    <Typography
                        variant={'h1'}
                        fontSize={18}
                        fontWeight={600}
                    >
                        WeLove9am
                    </Typography>

                </Stack>

                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={400}
                    pt={'14px'}
                    maxWidth={'90%'}
                    lineHeight={'26px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus laoreet felis pharetra, accumsan massa vulputate. Facilisi nisl dis porta molestie faucibus.
                </Typography>
            </Stack>

            <Stack
                width={'100%'}
                border={'1px solid rgba(0, 0, 0, 0.08)'}
                borderRadius={'12px'}
                p={'24px 17px 24px 24px'}
                bgcolor={colorPalette.white}
            >
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >

                    <Typography
                        variant={'h1'}
                        fontSize={18}
                        fontWeight={600}
                    >
                        Client
                    </Typography>

                    <Button
                        variant={'outlined'}
                        borderColor={'rgba(39, 64, 82, 0.15)'}
                        LabelColor={colorPalette.pink200}
                        startIcon={<EditIcon />}
                        onClick={() => navigate(POLICY_URL)}
                        sx={{
                            '& .MuiButton-startIcon': {
                                '& svg > path': {
                                    stroke: colorPalette.pink200
                                }
                            }
                        }}
                    >
                        Edit
                    </Button>
                </Stack>

                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={400}
                    pt={'14px'}
                    maxWidth={'90%'}
                    lineHeight={'26px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus laoreet felis pharetra, accumsan massa vulputate. Facilisi nisl dis porta molestie faucibus.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default TermsConditionTab;