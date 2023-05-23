import { FC } from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { colorPalette } from '../colors';

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

export const OfficeLocationMenu: FC<SelectProps & { list: any[] }> = (props) => {
    return (
        <Select
            label={''}
            sx={{
                height: 40,
                minWidth: 166,
                fontSize: 14,
                '& fieldset': {
                    borderRadius: '130px',
                    border: '1px solid rgba(39, 64, 82, 0.15) !important',
                },

            }}
            IconComponent={ExpandMoreOutlinedIcon}
            displayEmpty={true}
            renderValue={(selected: any) => {
                if (!selected) {
                    return (
                        <Typography
                            component={'span'}
                            fontSize={14}
                            fontWeight={400}
                            color={colorPalette.blue800}
                        >
                            Office location
                        </Typography>
                    );
                }

                return selected;
            }}
            MenuProps={MenuProps}
            {...props}
        >
            {
                props.list ? props.list.map((_el) => (

                    <MenuItem
                        key={_el.id}
                        value={_el.name}
                        sx={{ fontSize: 14 }}
                    >
                        {_el.name}
                    </MenuItem>
                ))
                    :
                    null
            }
        </Select>
    );
};