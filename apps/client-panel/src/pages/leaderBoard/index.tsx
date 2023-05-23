import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { commonTypes } from '@models/common';
import TopEarners from './components/topEarners';

const LeaderBoardPage = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });

    return (
        <Stack>
            <Typography variant={'h1'} p={'24px 0px'}>Leadership board</Typography>

            <Stack>

                <TopEarners />

            </Stack>
        </Stack>
    );
};

export default LeaderBoardPage;