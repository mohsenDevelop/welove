import { Paper } from 'ui';
import TopMediaHeader from './TopMediaHeader';
import TopMediaList from './TopMediaList';

const TopMedia = () => {
    return (
        <Paper
            sx={{ mt: '24px', p: '30px 24px' }}
        >
            <TopMediaHeader />
            <TopMediaList />
        </Paper>
    );
};

export default TopMedia;