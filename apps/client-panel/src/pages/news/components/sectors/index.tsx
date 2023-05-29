import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colorPalette } from 'ui';

const sectorLists = ['Company', 'Sector', 'Individuals', 'Sector', 'Company', 'Individuals', 'Company', 'Individuals'];

const Sectors = () => {

    const [selected, setSelected] = useState<readonly number[]>([]);

    const isSelected = (_id: number) => selected.indexOf(_id) !== -1;

    const handleSelect = (index: number) => {

        const selectedIndex = selected.indexOf(index);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    return (
        <Stack
            pt={'44px'}
            gap={'24px'}
        >
            <Typography fontSize={16} fontWeight={500}>Sector sub category (Multi select) </Typography>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                flexWrap={'wrap'}
                rowGap={'40px'}
                columnGap={'28px'}
            >
                {
                    sectorLists.map((_el: string, _index: number) => {
                        const isItemSelected = isSelected(_index);

                        return (
                            <Box
                                key={_index.toString()}
                                border={'1px solid rgba(0, 0, 0, 0.15)'}
                                bgcolor={isItemSelected ? colorPalette.blue800 : 'inherit'}
                                color={isItemSelected ? colorPalette.white : colorPalette.gray900}
                                borderRadius={'17px'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                p={'16px 34px'}
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'all ease .2s'
                                }}
                                onClick={() => handleSelect(_index)}
                            >
                                {_el}
                            </Box>
                        );
                    })
                }


            </Stack>
        </Stack>
    );
};

export default Sectors;