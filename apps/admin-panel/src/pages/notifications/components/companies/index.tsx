import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import {
    TextField,
    CompanyList
} from 'ui';
import { SearchIcon } from 'assets-ui';

const rows = [
    {
        id: '1',
        img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        company: 'Company Name Placeholder',
    },
    {
        id: '2',
        img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        company: 'Company Name Placeholder',
    },
    {
        id: '3',
        img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        company: 'Company Name Placeholder',
    },
    {
        id: '4',
        img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        company: 'Company Name Placeholder',
    },
];

const Companies = () => {
    return (
        <Stack
            pt={'44px'}
            gap={'21px'}
        >

            <Stack
                flexDirection={'row'}
            >
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={'start'}>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: 456 }}
                />
            </Stack>

            <CompanyList
                rows={rows}
                sx={{ p: '34px 30px' }}
            />
        </Stack>
    );
};

export default Companies;