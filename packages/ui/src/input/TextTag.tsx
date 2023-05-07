import { ChangeEvent, FC, useState } from 'react';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colorPalette } from '../colors';

export interface TextTagProps {
    sx?: SxProps;
    onTags: (tags: readonly string[]) => void;
}

export const TextTag: FC<TextTagProps> = ({ sx, onTags }) => {

    const [value, setValue] = useState<string>('');
    const [tags, setTags] = useState<readonly string[]>([]);

    const handleSubmit = (event: any) => {

        if (event.key === 'Enter') {

            const selectedIndex = tags.indexOf(value);
            let newSelected: readonly string[] = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(tags, value);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(tags.slice(1));

            } else if (selectedIndex === tags.length - 1) {
                newSelected = newSelected.concat(tags.slice(0, -1));

            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    tags.slice(0, selectedIndex),
                    tags.slice(selectedIndex + 1),
                );
            }

            setTags(newSelected);
            setValue('');
            onTags(newSelected);

        }

    };

    const handleRemoveTag = (_tagIndex: number) => {

        let newSelected: readonly string[] = [];

        newSelected = newSelected.concat(
            tags.slice(0, _tagIndex),
            tags.slice(_tagIndex + 1),
        );
        setTags(newSelected);
        onTags(newSelected);
    };

    return (
        <Stack
            flexDirection={'row'}
            border={'1px solid rgba(39, 64, 82, 0.25)'}
            borderRadius={'17px'}
            minHeight={'44px'}
            sx={sx}
        >
            <Stack
                width={'100%'}
                flexDirection={'row'}
                alignItems={'center'}
                gap={'10px'}
                padding={'0px 14px'}
            >

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'10px'}
                    p={'8px 0px'}
                    flexWrap={'wrap'}
                >
                    {tags.map(((_el: string, _index: number) => (
                        <Box
                            key={_index.toString()}
                            border={'1px solid rgba(0, 0, 0, 0.1)'}
                            borderRadius={'80px'}
                            display={'flex'}
                            alignItems={'center'}
                            gap={'4px'}
                            p={'5px 10px'}
                        >
                            <Typography
                                color={colorPalette.blue800}
                                fontSize={12}
                                fontWeight={400}
                            >
                                {_el}
                            </Typography>
                            <svg
                                width='9'
                                height='9'
                                viewBox='0 0 14 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={() => handleRemoveTag(_index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M13.7044 13.0208C14.0949 12.6303 14.0949 11.9971 13.7044 11.6066L8.75534 6.65754L13.7058 1.70711C14.0963 1.31659 14.0963 0.68342 13.7058 0.292896C13.3152 -0.0976287 12.6821 -0.0976286 12.2916 0.292895L7.34113 5.24332L2.3907 0.292893C2.00018 -0.0976306 1.36701 -0.0976316 0.976487 0.292893C0.585963 0.683417 0.585963 1.31658 0.976487 1.70711L5.92691 6.65753L0.977845 11.6066C0.587321 11.9971 0.587321 12.6303 0.977846 13.0208C1.36837 13.4113 2.00154 13.4113 2.39206 13.0208L7.34113 8.07175L12.2902 13.0208C12.6807 13.4113 13.3139 13.4113 13.7044 13.0208Z'
                                    fill='#040921'
                                />
                            </svg>

                        </Box>
                    )))}

                    <InputBase
                        onChange={(event: ChangeEvent<any>) => setValue(event.target.value)}
                        onKeyDown={handleSubmit}
                        value={value}
                        placeholder={'Type here...'}
                        sx={{ fontSize: 14, fontWeight: 400 }}
                    />

                </Stack>

            </Stack>
        </Stack>
    );
};