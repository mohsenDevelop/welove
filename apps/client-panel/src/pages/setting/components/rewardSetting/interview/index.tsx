import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import AddInterviewButton from './AddInterviewButton';

const InterviewStage = () => {
    return (
        <Stack
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            py={'38px'}
        >
            <Stack
                flexDirection={'row'}
                justifyItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography
                    color={colorPalette.blue800}
                    fontSize={16}
                    fontWeight={600}
                >
                    Interview’s
                </Typography>
                <AddInterviewButton />

            </Stack>
        </Stack>
    );
};

export default InterviewStage;