import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    Dialog,
    colorPalette,
    Button,
    TextField
} from 'ui';
import { CloseIcon } from 'assets-ui';

const AddEmployeePointDialog = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState<string>('');

    return (
        <Dialog
            open={true}
            onClose={() => navigate(-1)}
            width={'434px'}
        >
            <Stack
                p={'34px 34px 24px 34px'}
            >

                <Stack
                    alignItems={'flex-end'}
                >
                    <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </Stack>
                <Typography
                    fontSize={20}
                    fontWeight={600}
                    pb={'12px'}
                >
                    Add point
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                    color={colorPalette.gray550}
                    pb={'38px'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit.
                </Typography>

                <Stack>
                    <Box
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={57}
                        height={57}
                        borderRadius={'50%'}
                        bgcolor={colorPalette.gray70}
                        mr={'31px'}
                        sx={{
                            cursor: 'pointer',
                            backgroundImage: `url(${'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427'})`,
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    />

                    <Typography
                        fontSize={16}
                        fontWeight={600}
                        color={colorPalette.blue800}
                        pt={'10px'}
                    >
                        Randy Calzoni
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={600}
                    >
                        Points: 2,423
                        <Box
                            component={'span'}
                            borderRadius={'50%'}
                            display={'inline-flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            bgcolor={colorPalette.orange120}
                            width={12}
                            height={12}
                            fontSize={9}
                            fontWeight={500}
                            color={colorPalette.white}
                            ml={'4px'}
                            sx={{
                                transform: 'translateY(-2px)'
                            }}
                        >
                            P
                        </Box>
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        pt={'22px'}
                        pb={'10px'}
                    >
                        Randy Calzoni
                    </Typography>
                    <TextField
                        placeholder={''}
                        fullWidth={true}
                        onChange={(e: any) => setValue(e.target.value)}
                        value={value}
                        type={'number'}
                        inputProps={{
                            autoComplete: 'off',
                        }}
                    />

                    <Stack
                        flexDirection={'row-reverse'}
                        gap={'15px'}
                        pt={'28px'}
                    >
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            backgroundColor={colorPalette.pink200}
                            LabelColor={colorPalette.white}
                            disabled={value.length === 0}
                            sx={{ width: 115 }}
                        >
                            Submit
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
            </Stack>
        </Dialog>
    );
};

export default AddEmployeePointDialog;