import { Paper } from 'ui';
import TopNetworksHeader from './TopNetworksHeader';
import TopNetworksList from './TopNetworksList';

const TopNetwork = () => {
    return (
        <Paper
            sx={{ p: '30px 24px' }}
        >
            <TopNetworksHeader />
            <TopNetworksList />
        </Paper>
    );
};

export default TopNetwork;