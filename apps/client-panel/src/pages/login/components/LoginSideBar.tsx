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
            bgcolor={colorPalette.blue10}
        >

            <Stack
                pt={'171px'}
                alignItems={'center'}
                maxWidth={570}
            >
                <LogingImg style={{ width: 130, height: 130 }} />
                <Typography
                    fontSize={24}
                    fontWeight={500}
                    lineHeight={'33px'}
                    color={colorPalette.blue800}
                    textAlign={'center'}
                    p={'66px 50px 25px 50px'}
                >
                    Lorem ipsum dolor sit amet consectetur. Mattis mauris mauris ipsum consectetur nunc id at. Dis a facilisis ut gravida rutrum arcu.
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    color={colorPalette.blue800}
                    textAlign={'center'}
                >
                    Colby Howard — Founding Partner, Paragon Intel
                </Typography>
            </Stack>
        </Stack >
    );
};

export default LoginSideBar;