import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

import { colorPalette } from 'ui';
import ProfileView from './ProfileView';
import ProfileStatisics from './ProfileStatisics';

const EmployeeProfilePage = () => {

    const navigate = useNavigate();

    return (
        <Stack gap={'37px'}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'6px'}
                bgcolor={colorPalette.white}
                border={'1px solid rgba(0, 0, 0, 0.1)'}
                borderRadius={'210px'}
                maxWidth={'90px'}
                height={'44px'}
                p={'0px 16px 0px 10px'}
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(-1)}
            >
                <NavigateBeforeOutlinedIcon />
                <Typography
                    fontSize={14}
                    fontWeight={600}
                    color={colorPalette.blue800}
                >
                    Back
                </Typography>
            </Box>

            <Grid container={true} spacing={3}>
                <Grid
                    item={true}
                    xs={8}
                >
                    <ProfileView />
                </Grid>

                <Grid
                    item={true}
                    xs={4}
                >
                    <ProfileStatisics />

                </Grid>
            </Grid>


        </Stack>
    );
};

export default EmployeeProfilePage;