import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';

import {
    Dialog,
    colorPalette,
    Button,
    TextArea
} from 'ui';
import { CloseIcon } from 'assets-ui';

const DeclineDialog = () => {

    const navigate = useNavigate();

    const [textValue, setTextValue] = useState<string>('');
    const [selectedRadioValue, setSelectedRadioValue] = useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioValue(event.target.value);
    };

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'591px'}
        >
            <Stack
                p={'34px 34px 24px 34px'}
            >
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    pb={'30px'}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={600}
                        pb={'12px'}
                    >
                        Approve Reward?
                    </Typography>
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>

                <Typography
                    fontSize={16}
                    fontWeight={500}
                    lineHeight={'25px'}
                    pb={'24px'}
                    sx={{ opacity: .8 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna scelerisque sit ultrices nec donec amet urna. Volutpat dolor turpis eleifend egestas. A donec in diam donec cras orci. Auctor mi purus vitae ante quam posuere a, dui. Aenean cursus neque dolor scelerisque fames urna praesent dignissim nunc.
                </Typography>

                <Stack
                    gap={'15px'}
                >
                    <Box
                        height={54}
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'10'}
                        border={selectedRadioValue === 'a' ? `1.5px solid ${colorPalette.blue800}` : '1px solid rgba(39, 64, 82, 0.1)'}
                        borderRadius={'16px'}
                    >
                        <Radio
                            checked={selectedRadioValue === 'a'}
                            onChange={handleChange}
                            value={'a'}
                            name={'radio-buttons'}
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{
                                color: 'rgba(4, 9, 33, 0.32)',
                                '&.Mui-checked': {
                                    color: colorPalette.blue800
                                },
                            }}
                        />

                        <Typography
                            variant={'h1'}
                            fontSize={15}
                            fontWeight={500}
                        >
                            Reason 1
                        </Typography>
                    </Box>

                    <Box
                        height={54}
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'10'}
                        border={selectedRadioValue === 'b' ? `1.5px solid ${colorPalette.blue800}` : '1px solid rgba(39, 64, 82, 0.1)'}
                        borderRadius={'16px'}
                    >
                        <Radio
                            checked={selectedRadioValue === 'b'}
                            onChange={handleChange}
                            value={'b'}
                            name={'radio-buttons'}
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{
                                color: 'rgba(4, 9, 33, 0.32)',
                                '&.Mui-checked': {
                                    color: colorPalette.blue800
                                },
                            }}
                        />

                        <Typography
                            variant={'h1'}
                            fontSize={15}
                            fontWeight={500}
                        >
                            Reason 2
                        </Typography>
                    </Box>

                </Stack>

                <Stack
                    gap={'10px'}
                    pt={'24px'}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={500}
                    >
                        Send message
                        <Typography
                            component={'span'}
                            fontSize={14}
                            fontWeight={400}
                            pl={'2px'}
                        >
                            (optional)
                        </Typography>

                    </Typography>

                    <TextArea
                        multiline={true}
                        rows={4}
                        maxRows={4}
                        minRows={4}
                        value={textValue}
                        onChange={(event) => setTextValue(event.target.value)}
                    />

                </Stack>

                <Stack
                    flexDirection={'row-reverse'}
                    gap={'15px'}
                    pt={'20px'}
                >
                    <Button
                        variant={'contained'}
                        type={'submit'}
                        backgroundColor={colorPalette.pink200}
                        LabelColor={colorPalette.white}
                        sx={{ width: 118 }}
                    >
                        Decline
                    </Button>

                    <Button
                        variant={'outlined'}
                        type={'button'}
                        borderColor={colorPalette.white}
                        LabelColor={colorPalette.blue800}
                        sx={{ width: 114 }}
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </Button>

                </Stack>

            </Stack>

        </Dialog>
    );
};

export default DeclineDialog;