import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

const SocialTopClientsSearch: FC<SocialTopClientsProps> = ({ onSearch }) => {

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
        >
            <InputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Search by company name...'
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

export interface SocialTopClientsProps {
    onSearch: (val: string) => void;
}

export default SocialTopClientsSearch;