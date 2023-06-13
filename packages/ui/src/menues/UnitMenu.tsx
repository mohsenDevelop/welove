import { FC } from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colorPalette } from '../colors';

export interface UnitMenuProps {
    title: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            border: '1px solid rgba(0, 0, 0, 0.2)',
            boxShadow: 'px 1px 12px rgba(168, 168, 168, 0.58)',
            borderRadius: '20px',
            marginTop: '4px'
        },
    },
};

export const UnitMenu: FC<SelectProps> = (props) => {

    return (
        <Select
            label={''}
            sx={{
                height: 40,
                minWidth: 50,
                fontSize: 14,
                '& fieldset': {
                    borderRadius: '0px !important',
                    borderWidth: '0px !important',
                    borderRight: '1px solid #C9CFD3 !important',
                },

            }}
            IconComponent={ExpandMoreOutlinedIcon}
            displayEmpty={true}
            renderValue={(selected: any) => {
                if (!selected) {
                    return (
                        <Stack
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'4px'}
                        >
                            <Typography
                                component={'span'}
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.blue800}
                            >
                                £
                            </Typography>
                        </Stack>
                    );
                }

                return selected;
            }}
            MenuProps={MenuProps}
            {...props}
        >
            <MenuItem value={'£'} sx={{ fontSize: 14 }}>£</MenuItem>
            <MenuItem value={'$'} sx={{ fontSize: 14 }}>$</MenuItem>
        </Select>
    );
};