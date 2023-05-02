import { useState, MouseEvent } from 'react';
import { format } from 'date-fns';
import { DateRangePicker, Range } from 'react-date-range';

import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    Button,
    colorPalette,
} from 'ui';
import { CalendarIcon } from 'assets-ui';
import { StyledMenu } from './style';

type selectDate = {
    startDate: Date,
    endDate: Date,
    key: string,
}
const DateRange = () => {

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [dateRange, setDateRange] = useState<any[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: '#274052'
        }
    ]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (ranges: { selection: Range }) => {
        console.log({ ranges });
        setDateRange([ranges.selection]);
        setIsSelected(true);
    };

    return (
        <div>
            <Button
                id='role-date-more-button'
                aria-controls={open ? 'role-date-more-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant={'outlined'}
                LabelColor={colorPalette.blue800}
                borderColor={'rgba(0, 0, 0, 0.12)'}
                endIcon={open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                startIcon={<CalendarIcon />}
                sx={{
                    height: 52,
                    fontWeight: 600,
                    fontSize: 13
                }}
                onClick={handleClick}
            >
                {isSelected ? `${format(new Date(dateRange[0].startDate), 'dd LLL uuuu')} - ${format(new Date(dateRange[0].endDate), 'dd LLL uuuu')}` : 'Select Date'}
            </Button>

            <StyledMenu
                id='role-news-more-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <DateRangePicker
                    onChange={(item: any) => handleSelect(item)}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={dateRange}
                    direction='horizontal'
                    preventSnapRefocus={true}
                    calendarFocus={'backwards'}
                />
            </StyledMenu>
        </div>
    );
};

export default DateRange;