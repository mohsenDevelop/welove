import { NEWS_URL } from '@config/urls';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BreadCrumb, Paper } from 'ui';
import CopyItemForm from './CopyItemForm';

const CopyItemPage = () => {

    const navigate = useNavigate();

    return (
        <Stack>
            <BreadCrumb
                list={[
                    { link: NEWS_URL, name: 'News' },
                    { link: '', name: 'Add News item' },
                ]}
                onClick={(link: string) => navigate(link)}
            />

            <Paper
                sx={{
                    mt: '24px',
                    p: '30px',
                    boxShadow: '0px 1px 12px rgba(168, 168, 168, 0.08)'
                }}
            >
                <Typography
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={600}
                    pb={'10px'}
                    sx={{ opacity: .7 }}
                >
                    Add
                </Typography>

                <Typography
                    variant={'h1'}
                    fontSize={28}
                    fontWeight={600}
                    pb={'38px'}
                >
                    Copy Item
                </Typography>

                <CopyItemForm />

            </Paper>
        </Stack>
    );
};

export default CopyItemPage;