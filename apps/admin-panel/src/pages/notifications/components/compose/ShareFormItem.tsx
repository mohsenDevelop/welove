import { useState, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Button,
    colorPalette
} from 'ui';
import Companies from '../companies';

const ShareFormItem = () => {

    const [toggle, setToggle] = useState<string>('All');

    return (
        <>
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'47px'}
            >
                <Stack
                    gap={'6px'}
                    flex={.5}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        * Share within
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                    </Typography>

                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'19px'}
                >
                    <Button
                        variant={toggle === 'All' ? 'contained' : 'outlined'}
                        LabelColor={toggle === 'All' ? colorPalette.white : colorPalette.blue800}
                        backgroundColor={toggle === 'All' ? colorPalette.blue800 : 'inherit'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        sx={{
                            height: 49,
                            width: 139,
                        }}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => setToggle(event.currentTarget.innerText)}
                    >
                        All
                    </Button>

                    <Button
                        variant={toggle !== 'All' ? 'contained' : 'outlined'}
                        LabelColor={toggle !== 'All' ? colorPalette.white : colorPalette.blue800}
                        backgroundColor={toggle !== 'All' ? colorPalette.blue800 : 'inherit'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        sx={{
                            height: 49,
                            width: 139
                        }}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => setToggle(event.currentTarget.innerText)}
                    >
                        Company
                    </Button>

                </Stack>

            </Stack>

            {toggle !== 'All' ? <Companies /> : null}

        </>

    );
};

export default ShareFormItem;