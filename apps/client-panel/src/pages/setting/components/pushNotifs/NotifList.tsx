import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette, Switch } from 'ui';

const NotifList = () => {

    const [state, setState] = useState({
        gilad: true,
        jason: true,
        antoine: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const handleAllSwitch = () => {
        Object.values(state).every((_key) => _key === false) ? setState({ gilad: true, jason: true, antoine: true }) : setState({ gilad: false, jason: false, antoine: false });
    };

    return (
        <Stack
            pt={'24px'}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography
                    variant={'h1'}
                    fontSize={16}
                    fontWeight={600}
                >
                    Show notifications for
                </Typography>

                <Typography
                    fontSize={12}
                    fontWeight={500}
                    color={colorPalette.pink200}
                    sx={{ cursor: 'pointer', userSelect: 'none' }}
                    onClick={handleAllSwitch}
                >
                    {Object.values(state).every((_key) => _key === false) ? 'Turn on all notifications' : 'Turn off all notifications'}
                </Typography>

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
                    bgcolor={colorPalette.gray10}
                    borderRadius={'12px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum
                    </Typography>

                    <Switch
                        checked={state.gilad}
                        onChange={handleChange}
                        name='gilad'
                    />
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                    border={`1px solid ${colorPalette.white}`}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum
                    </Typography>

                    <Switch
                        checked={state.jason}
                        onChange={handleChange}
                        name='jason'
                    />
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={'34px 95px 34px 24px'}
                    bgcolor={colorPalette.gray10}
                    borderRadius={'12px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum
                    </Typography>

                    <Switch
                        checked={state.antoine}
                        onChange={handleChange}
                        name='antoine'
                    />
                </Stack>

            </Stack>
        </Stack>
    );
};

export default NotifList;