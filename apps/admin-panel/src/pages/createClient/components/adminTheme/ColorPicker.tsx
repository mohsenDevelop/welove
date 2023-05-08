import { FC, useState, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
    ColorIcon
} from 'assets-ui';
import { colorsType } from './AdminThemeProvider';

const ColorPicker: FC<ColorPickerProps> = ({ name, title, caption, onChange }) => {

    const [colorValue, setColor] = useState<string>('#000');

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
        onChange(event.target.value, name);
    };

    return (
        <Stack>
            <Typography
                fontSize={16}
                fontWeight={500}
                pb={'6px'}
            >
                {title}
            </Typography>
            {

                caption.length ? <Typography fontSize={12} fontWeight={400} pb={'6px'}> {caption}</Typography> : null
            }
            <Stack
                height={44}
                border={'1px solid rgba(39, 64, 82, 0.25)'}
                borderRadius={'17px'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                sx={{ cursor: 'pointer' }}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'10px'}
                    pl={'14px'}
                >
                    <Box
                        width={23}
                        height={23}
                        borderRadius={'50%'}
                        bgcolor={colorValue}
                    >
                        <input
                            type={'color'}
                            style={{ opacity: 0 }}
                            onChange={handleChangeInput}
                        />
                    </Box>

                    <Typography fontSize={16} fontWeight={500}>{colorValue}</Typography>
                </Stack>

                <ColorIcon style={{ marginRight: '14px' }} />
            </Stack>

        </Stack >
    );
};

export interface ColorPickerProps {
    title: string;
    caption: string;
    name: keyof colorsType;
    onChange: (color: string, name: keyof colorsType) => void;
}

export default ColorPicker;