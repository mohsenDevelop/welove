import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from '../colors';

const Comment = () => {

    return (
        <Stack
            mt={'16px'}
            p={'16px'}
            border={`4px solid ${colorPalette.green300}`}
            borderRadius={'10px'}
            bgcolor={'rgba(120, 186, 90, 0.1)'}
        >
            <Stack flexDirection={'row'} alignItems={'center'} gap={'8px'} mb={'10px'}>
                <img
                    alt={'avatar-comment'}
                    style={{ width:'52px',height:'52px', borderRadius: '100%' }}
                />
                <Typography fontSize={16} fontWeight={600}>Bon ton restaurant</Typography>
            </Stack>

            <Stack>
                <Typography fontSize={14} fontWeight={300} lineHeight={'22px'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget commodo ornare nec eu. Urna, elit, pharetra volutpat maecenas morbi in aliquet. Bibendum lectus quis tellus eu.
                </Typography>
                <Stack flexDirection={'row'} justifyContent={'end'} mt={'8px'}>
                    <Typography fontSize={12} fontWeight={400} sx={{ opacity: '40%' }}>1m ago.</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Comment;