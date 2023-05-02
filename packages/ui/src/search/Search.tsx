import { useState, FC } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

export interface SearchProps {
    onSearch: (val: string) => void;
    placeHolder?: string;
    sx?: SxProps
}

export const Search: FC<SearchProps> = ({ sx, placeHolder, onSearch }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event: any) => {

        event.preventDefault();
        onSearch(value);
    };

    return (
        <Box
            width={304}
            height={40}
            display={'flex'}
            alignItems={'center'}
            component={'form'}
            onSubmit={handleSubmit}
            borderRadius={'182px'}
            border={'1px solid rgba(39, 64, 82, 0.15)'}
            pl={'14px'}
            pr={'14px'}
            sx={sx}
        >
            <InputBase
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                placeholder={placeHolder ?? ''}
                sx={{
                    width: '100%',
                    '& input': {
                        fontSize: 14
                    }
                }}
            />
        </Box>
    );
};