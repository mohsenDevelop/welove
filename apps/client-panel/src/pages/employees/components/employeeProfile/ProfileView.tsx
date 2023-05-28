import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    colorPalette,
    Paper,
    Button
} from 'ui';
import { EditWhiteIcon } from 'assets-ui';
import { EMPLOYEES_INDIVIDUAL_FROM_URL } from '@config/urls';
import MoreButton from './MoreButton';

const ProfileView = () => {

    const navigate = useNavigate();

    return (
        <Paper
            type={'client'}
            sx={{
                p: '30px 19px 30px 32px'
            }}
        >
            <Typography
                fontSize={14}
                fontWeight={600}
                color={colorPalette.blue800}
                pb={'10px'}
            >
                Profile
            </Typography>

            <Typography
                fontSize={28}
                fontWeight={600}
                color={colorPalette.blue800}
                pb={'24px'}
            >
                Randy Calzoni
            </Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={96}
                    height={96}
                    borderRadius={'50%'}
                    bgcolor={colorPalette.gray70}
                    mr={'31px'}
                    sx={{
                        cursor: 'pointer',
                        backgroundImage: `url(${'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427'})`,
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                />

                <Button
                    variant={'contained'}
                    type={'submit'}
                    backgroundColor={colorPalette.blue800}
                    LabelColor={colorPalette.white}
                    startIcon={<EditWhiteIcon />}
                    sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        width: 204,
                        mr: '5px'
                    }}
                    onClick={() => navigate(EMPLOYEES_INDIVIDUAL_FROM_URL)}
                >
                    Edit profile
                </Button>

                <MoreButton />
            </Stack>

            <Stack pt={'24px'} gap={'20px'}>

                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Randy Calzoni
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        Randy Calzoni
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Email
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        RandyCalzoni@gmail.com
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Phone number
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        +44 882928 82828
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Location Name
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        Location name
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Work postcode
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        Ha1231212
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Home postcode
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        Ha1231212
                    </Typography>
                </Stack>
                <Stack
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}
                    pb={'20px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Division
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        IT
                    </Typography>
                </Stack>
                <Stack>
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        pb={'10px'}
                    >
                        Job Title
                    </Typography>
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.blue800}
                        pb={'10px'}
                    >
                        Maren Korsgaard
                    </Typography>
                </Stack>
            </Stack>

        </Paper>
    );
};

export default ProfileView;