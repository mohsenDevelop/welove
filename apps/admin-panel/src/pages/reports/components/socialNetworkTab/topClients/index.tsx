import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import {
    Paper,
    Button,
    colorPalette,
    TablePagination
} from 'ui';
import SocialTopClientHeader from './Header';
import SocialTopClientsSearch from './Search';
import SocialTopClientsTable from './Table';

const SocialTopClients = () => {
    return (
        <Paper
            sx={{ mt: '24px', p: '24px' }}
        >
            <SocialTopClientHeader
                renderCsv={() => (
                    <Button
                        variant={'outlined'}
                        LabelColor={colorPalette.blue800}
                        borderColor={'rgba(39, 64, 82, 0.15)'}
                        startIcon={<FileDownloadOutlinedIcon />}
                        sx={{
                            fontSize: 13,
                            fontWeight: 500
                        }}
                    >
                        Downlaod csv
                    </Button>
                )}
                renderSearch={() => <SocialTopClientsSearch onSearch={(searchValue) => { return; }} />}
            />

            <SocialTopClientsTable />
        </Paper>
    );
};

export default SocialTopClients;