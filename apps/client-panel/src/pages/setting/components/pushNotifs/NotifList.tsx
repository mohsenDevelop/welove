import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette, Switch } from 'ui';

const NotifList = () => {

    const [notifState, setNotifState] = useState<any>({
        gilad: true,
        jason: true,
        antoine: true,
        referralMobile: true,
    });

    const [emailState, setEmailState] = useState<any>({
        shareEmail: true,
        applicationEmail: true,
        hireEmail: true,
        referralEmail: true,
    });

    const handleChangeNotif = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotifState({
            ...notifState,
            [event.target.name]: event.target.checked,
        });
    };
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailState({
            ...emailState,
            [event.target.name]: event.target.checked,
        });
    };

    const handleAllPushNotifSwitch = () => {
        Object.values(notifState).every((_key) => _key === false) ?
            setNotifState(
                {
                    gilad: true,
                    jason: true,
                    antoine: true,
                    referralMobile: true,
                }
            )
            :
            setNotifState(
                {
                    gilad: false,
                    jason: false,
                    antoine: false,
                    referralMobile: false,
                }
            );
    };

    const handleAllEmailSwitch = () => {
        Object.values(emailState).every((_key) => _key === false) ?
            setEmailState(
                {
                    shareEmail: true,
                    applicationEmail: true,
                    hireEmail: true,
                    referralEmail: true,
                }
            )
            :
            setEmailState(
                {
                    shareEmail: false,
                    applicationEmail: false,
                    hireEmail: false,
                    referralEmail: false,
                }
            );
    };

    return (
        <Stack
            pt={'24px'}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                pr={'50px'}
            >
                <Typography
                    variant={'h1'}
                    fontSize={16}
                    fontWeight={600}
                >
                    Show notifications for
                </Typography>

                <Stack
                    flexDirection={'row'}
                    gap={'65px'}
                >

                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'34px'}
                    >
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                        >
                            Email
                        </Typography>
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            color={colorPalette.pink200}
                            sx={{ cursor: 'pointer', userSelect: 'none' }}
                            onClick={handleAllEmailSwitch}
                        >
                            {Object.values(emailState).every((_key) => _key === false) ? 'Turn on all email' : 'Turn off all email'}
                        </Typography>
                    </Box>

                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'7px'}
                    >
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                        >
                            Mobile
                        </Typography>
                        <Typography
                            fontSize={12}
                            fontWeight={400}
                            color={colorPalette.gray550}
                        >
                            Push notifications
                        </Typography>
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            color={colorPalette.pink200}
                            sx={{ cursor: 'pointer', userSelect: 'none' }}
                            onClick={handleAllPushNotifSwitch}
                        >
                            {Object.values(notifState).every((_key) => _key === false) ? 'Turn on all mobile' : 'Turn off all mobile'}
                        </Typography>
                    </Box>

                </Stack>

            </Stack>

            <Stack
                pt={'14px'}
                gap={'4px'}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                    bgcolor={colorPalette.white}
                    borderRadius={'12px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Share
                    </Typography>

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'129px'}
                    >

                        <Switch
                            checked={emailState.shareEmail}
                            onChange={handleChangeEmail}
                            name='shareEmail'
                        />
                        <Switch
                            checked={notifState.gilad}
                            onChange={handleChangeNotif}
                            name='gilad'
                        />

                    </Box>
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Application
                    </Typography>

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'129px'}
                    >
                        <Switch
                            checked={emailState.applicationEmail}
                            onChange={handleChangeEmail}
                            name='applicationEmail'
                        />

                        <Switch
                            checked={notifState.jason}
                            onChange={handleChangeNotif}
                            name='jason'
                        />

                    </Box>

                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                    bgcolor={colorPalette.white}
                    borderRadius={'12px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Hire
                    </Typography>

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'129px'}
                    >
                        <Switch
                            checked={emailState.hireEmail}
                            onChange={handleChangeEmail}
                            name='hireEmail'
                        />
                        <Switch
                            checked={notifState.antoine}
                            onChange={handleChangeNotif}
                            name='antoine'
                        />

                    </Box>

                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Only show me a notification when I get a new referral
                    </Typography>

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'129px'}
                    >
                        <Switch
                            checked={emailState.referralEmail}
                            onChange={handleChangeEmail}
                            name='referralEmail'
                        />

                        <Switch
                            checked={notifState.referralMobile}
                            onChange={handleChangeNotif}
                            name='referralMobile'
                        />

                    </Box>

                </Stack>

            </Stack>
        </Stack>
    );
};

export default NotifList;