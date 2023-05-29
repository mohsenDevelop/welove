import { useState, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
    Button,
    colorPalette
} from 'ui';
import Companies from './companies';
import Individuals from './individuals';
import Sectors from './sectors';

const ShareFormItem = () => {

    const [toggle, setToggle] = useState<'Company' | 'Sector' | 'Individuals'>('Company');

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
                        variant={toggle === 'Company' ? 'contained' : 'outlined'}
                        LabelColor={toggle === 'Company' ? colorPalette.white : colorPalette.blue800}
                        backgroundColor={toggle === 'Company' ? colorPalette.blue800 : 'inherit'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        sx={{
                            height: 49,
                            width: 139,
                        }}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => setToggle(event.currentTarget.innerText as 'Company')}
                    >
                        Company
                    </Button>

                    <Button
                        variant={toggle === 'Sector' ? 'contained' : 'outlined'}
                        LabelColor={toggle === 'Sector' ? colorPalette.white : colorPalette.blue800}
                        backgroundColor={toggle === 'Sector' ? colorPalette.blue800 : 'inherit'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        sx={{
                            height: 49,
                            width: 139
                        }}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => setToggle(event.currentTarget.innerText as 'Sector')}
                    >
                        Sector
                    </Button>

                    <Button
                        variant={toggle === 'Individuals' ? 'contained' : 'outlined'}
                        LabelColor={toggle === 'Individuals' ? colorPalette.white : colorPalette.blue800}
                        backgroundColor={toggle === 'Individuals' ? colorPalette.blue800 : 'inherit'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        sx={{
                            height: 49,
                            width: 139
                        }}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => setToggle(event.currentTarget.innerText as 'Individuals')}
                    >
                        Individuals
                    </Button>

                </Stack>

            </Stack>

            {toggle === 'Company' ? <Companies /> : null}
            {toggle === 'Individuals' ? <Individuals /> : null}
            {toggle === 'Sector' ? <Sectors /> : null}

        </>

    );
};

export default ShareFormItem;