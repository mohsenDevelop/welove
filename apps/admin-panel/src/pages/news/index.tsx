import Stack from '@mui/material/Stack';

import {
    BookFillIcon
} from 'assets-ui';
import NewsList from './components/NewsList';

const NewsPage = () => {
    return (
        <Stack>
            <BookFillIcon />
            <NewsList />
        </Stack>
    );
};

export default NewsPage;