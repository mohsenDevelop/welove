import { useState, FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

const AdminHeader: FC<AdminHeaderProps> = ({ onSearch }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event: any) => {

        event.preventDefault();
        onSearch(value);
    };

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pb={'24px'}
        >
            <Typography
                variant={'h1'}
                fontSize={20}
                fontWeight={600}
            >
                Admin Access
            </Typography>

            <Box
                width={387}
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
                    placeholder='Search by name or email then Enter'
                    sx={{
                        width: '100%',
                        '& input': {
                            fontSize: 14
                        }
                    }}
                />
            </Box>
        </Stack>
    )
};

export interface AdminHeaderProps {
    onSearch: (val: string) => void;
}
export default AdminHeader;