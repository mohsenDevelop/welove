import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from 'ui';
import AddInterviewButton from './AddInterviewButton';
import InterviewItem from './InterviewItem';

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
                <Stack>
                    <Typography
                        color={colorPalette.blue800}
                        fontSize={16}
                        fontWeight={600}
                    >
                        Interview’s
                    </Typography>
                    <Typography
                        color={colorPalette.gray550}
                        fontSize={14}
                        fontWeight={400}
                        pb={'38px'}
                    >
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </Stack>
                <AddInterviewButton />
            </Stack>

            <Stack gap={'38px'}>
                <InterviewItem />
                <InterviewItem />
            </Stack>

        </Stack>
    );
};

export default InterviewStage;