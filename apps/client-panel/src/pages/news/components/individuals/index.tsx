import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import {
    TextField,
    IndividualList
} from 'ui';
import { SearchIcon } from 'assets-ui';

const rows = [
    {
        id: '1',
        fullName: 'Randy Calzoni',
        postalCode: 'WP:GU16 7HF',
        workCode: 'HP: 0NY',
        location: 'London,United kingdom',
        jobTitle: 'Title Placeholder text',
        division: 'Designer'
    },
    {
        id: '2',
        fullName: 'Randy Calzoni',
        postalCode: 'WP:GU16 7HF',
        workCode: 'HP: 0NY',
        location: 'London,United kingdom',
        jobTitle: 'Title Placeholder text',
        division: 'Designer'
    },
    {
        id: '3',
        fullName: 'Randy Calzoni',
        postalCode: 'WP:GU16 7HF',
        workCode: 'HP: 0NY',
        location: 'London,United kingdom',
        jobTitle: 'Title Placeholder text',
        division: 'Designer'
    },
    {
        id: '4',
        fullName: 'Randy Calzoni',
        postalCode: 'WP:GU16 7HF',
        workCode: 'HP: 0NY',
        location: 'London,United kingdom',
        jobTitle: 'Title Placeholder text',
        division: 'Designer'
    },

];

const Individuals = () => {
    return (
        <Stack
            pt={'44px'}
            gap={'21px'}
        >

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'47px'}
            >
                <Stack
                    gap={'6px'}
                    flex={1}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        * Choose employee
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                    </Typography>

                </Stack>

                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={'start'}>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flex: 1 }}
                />
            </Stack>

            <IndividualList
                rows={rows}
                sx={{ p: '0px 16px' }}
            />
        </Stack>
    );
};

export default Individuals;