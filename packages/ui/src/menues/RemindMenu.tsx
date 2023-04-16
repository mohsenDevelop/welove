import { FC } from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
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

export const RemindMenu: FC<SelectProps> = (props) => {

    return (
        <Select
            label={''}
            sx={{
                height: 40,
                minWidth: 130,
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
                        <Stack
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'4px'}
                        >
                            <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 19.9998C15 20.7955 14.6839 21.5585 14.1213 22.1211C13.5587 22.6837 12.7956 22.9998 12 22.9998C11.2044 22.9998 10.4413 22.6837 9.87868 22.1211C9.31607 21.5585 9 20.7955 9 19.9998H15ZM19.5 18.4998H3.15C2.91131 18.4998 2.68239 18.405 2.5136 18.2362C2.34482 18.0674 2.25 17.8385 2.25 17.5998C2.25 17.3611 2.34482 17.1322 2.5136 16.9634C2.68239 16.7946 2.91131 16.6998 3.15 16.6998H4.5V10.9998C4.5 7.36981 7.08 4.33981 10.5075 3.64981C10.4866 3.44124 10.5096 3.2306 10.5751 3.03147C10.6405 2.83234 10.747 2.64915 10.8876 2.4937C11.0283 2.33825 11.1999 2.214 11.3915 2.12897C11.5831 2.04393 11.7904 2 12 2C12.2096 2 12.4169 2.04393 12.6085 2.12897C12.8001 2.214 12.9717 2.33825 13.1124 2.4937C13.253 2.64915 13.3595 2.83234 13.4249 3.03147C13.4904 3.2306 13.5134 3.44124 13.4925 3.64981C15.1877 3.99461 16.7116 4.91458 17.8064 6.25398C18.9011 7.59338 19.4994 9.26993 19.5 10.9998V16.6998H20.85C21.0887 16.6998 21.3176 16.7946 21.4864 16.9634C21.6552 17.1322 21.75 17.3611 21.75 17.5998C21.75 17.8385 21.6552 18.0674 21.4864 18.2362C21.3176 18.405 21.0887 18.4998 20.85 18.4998H19.5Z' fill='#274052' />
                            </svg>

                            <Typography
                                component={'span'}
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.blue800}
                            >
                                Remind Me
                            </Typography>
                        </Stack>
                    );
                }

                return selected;
            }}
            MenuProps={MenuProps}
            {...props}
        >
            <MenuItem value={'Every 15 days'} sx={{ fontSize: 14 }}>Every 15 days</MenuItem>
            <MenuItem value={'Every 30 days'} sx={{ fontSize: 14 }}>Every 30 days</MenuItem>
        </Select>
    );
};