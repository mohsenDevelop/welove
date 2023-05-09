import Stack from '@mui/material/Stack';

import {
    BookFillIcon
} from 'assets-ui';
import NewsList from './components/NewsList';
import NewsHeader from './components/NewsHeader';

const NewsPage = () => {
    return (
        <Stack>
            <BookFillIcon />
            <NewsHeader />
            <NewsList />
        </Stack>
    );
};

export default NewsPage;