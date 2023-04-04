import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { LogingImg, Logo } from 'assets-ui';
import { colorPalette } from 'ui';

const LoginSideBar = () => {
    return (
        <Stack
            height={'100%'}
            alignItems={'center'}
            pt={'44px'}
        >
            <Logo style={{ width: 105, height: 50 }} />

            <Stack pt={'208px'} alignItems={'center'}>
                <LogingImg style={{ width: 130, height: 130 }} />
                <Typography
                    fontSize={24}
                    fontWeight={500}
                    lineHeight={'33px'}
                    color={colorPalette.white}
                    textAlign={'center'}
                    p={'66px 50px 25px 50px'}
                >
                    Lorem ipsum dolor sit amet consectetur. Mattis mauris mauris ipsum consectetur nunc id at. Dis a facilisis ut gravida rutrum arcu.
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    color={colorPalette.white}
                    textAlign={'center'}
                >
                    Colby Howard — Founding Partner, Paragon Intel
                </Typography>
            </Stack>
        </Stack >
    );
};

export default LoginSideBar;