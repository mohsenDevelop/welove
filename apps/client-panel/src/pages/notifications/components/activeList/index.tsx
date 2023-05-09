import { ChangeEvent, useState } from 'react'; import Stack from '@mui/material/Stack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { Paper, colorPalette, TablePagination } from 'ui';
import { commonTypes } from '@models/common';
import NotifItem from '../NotifItem';

const ActiveList = () => {

    const [filters, setFilters] = useState<commonTypes.Filters>({ page: 1, limit: 20 });
    const [selected, setSelected] = useState<readonly string[]>([]);

    const isSelected = (_id: string) => selected.indexOf(_id) !== -1;

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.checked) {
            //   const newSelected = rows.map((n) => n.name);
            const newSelected = ['0', '1', '2', '3', '4'];
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleSelect = (event: ChangeEvent<HTMLInputElement>, _id: string) => {

        const selectedIndex = selected.indexOf(_id);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, _id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));

        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));

        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    return (

        <>
            <Paper
                sx={{
                    mt: '24px',
                    pt: '30px',
                    boxShadow: '0px 1px 12px rgba(168, 168, 168, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.08)'
                }}
            >
                <Stack
                    height={36}
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'16px'}
                    px={'30px'}
                >
                    <Checkbox
                        indeterminate={selected.length > 0 && selected.length < 5}
                        checked={5 > 0 && selected.length === 5}
                        // checked={rowCount > 0 && selected.length === rowCount}
                        onChange={handleSelectAllClick}
                        inputProps={{
                            'aria-labelledby': '1',
                        }}
                        sx={{
                            '& svg > path': {
                                fill: 'rgba(4, 9, 33, 0.32)'
                            },
                            '&.Mui-checked': {
                                '& svg > path': {
                                    fill: colorPalette.blue800
                                },
                            }
                        }}
                    />
                    <Tooltip title={'Archive'}>
                        <ArchiveOutlinedIcon style={{ cursor: 'pointer' }} />
                    </Tooltip>
                </Stack>
                {
                    Array(5).fill({}).map((_el, _index: number) => {

                        const isItemSelected = isSelected(_index.toString());
                        const labelId = `company-table-checkbox-${_index}`;

                        return (
                            <NotifItem
                                key={_index.toString()}
                                id={_index.toString()}
                                checked={isItemSelected}
                                labelId={labelId}
                                onSelect={handleSelect}
                            />
                        );
                    })
                }

            </Paper>

            <Box
                display={'flex'}
                justifyContent={'flex-end'}
                pt={'24px'}
            >
                <TablePagination
                    // count={Math.ceil(paginationData?.total / UtilsHelper.tableRowCount)}
                    count={10}
                    page={filters.page ?? 1}
                    defaultPage={1}
                    onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                        setFilters((prev) => ({ ...prev, page: page }));
                    }}
                    shape='rounded'
                />
            </Box>
        </>
    );
};

export default ActiveList;