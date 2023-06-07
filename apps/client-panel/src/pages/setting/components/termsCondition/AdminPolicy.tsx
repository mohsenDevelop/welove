import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Paper,
    BackButton
} from 'ui';

const AdminPolicy = () => {

    const navigate = useNavigate();

    return (
        <Stack>
            <BackButton
                onClick={(event: any) => navigate(-1)}
            />

            <Typography variant={'h1'} p={'12px 0px 24px 0px'}>Terms and Conditions</Typography>

            <Paper
                sx={{ p: '30px 49px 30px 24px', maxWidth: 872 }}
            >
                <Typography variant={'h1'} fontSize={16} fontWeight={600}>
                    WeLove9am
                </Typography>

                <Typography
                    variant={'h1'}
                    fontSize={16}
                    fontWeight={400}
                    lineHeight={'26px'}
                    pt={'24px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis, ac odio mattis neque faucibus nisi. Nulla ligula enim netus sollicitudin phasellus. Pellentesque varius bibendum mauris sit etiam. Eu blandit maecenas cursus at montes, quis viverra.
                    Ac, viverra vehicula a, scelerisque ut integer et ac. Magna vulputate ultrices ipsum volutpat amet venenatis blandit. Nisi, dignissim purus aliquet condimentum sed. Fermentum suscipit bibendum porta eget dictumst est sapien lobortis. Erat et, eget consectetur diam placerat id netus elit magnis. Quis mauris pharetra volutpat fringilla. Amet amet pretium, cras pretium malesuada tempor vulputate. Tempor volutpat leo laoreet suspendisse. Sit pharetra ac nisi, duis in cursus. Neque, aliquet quis laoreet rhoncus nunc, vitae tristique tempus. Aenean egestas eleifend amet et viverra ultrices aenean metus, vulputate. Morbi duis eget id magnis velit, urna proin purus eu. Eget mi ullamcorper felis praesent sit ac suspendisse id.
                </Typography>
            </Paper>
        </Stack>
    );
};

export default AdminPolicy;