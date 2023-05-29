import { FC, useState } from 'react';
import { SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import { Paper } from '../paper/Paper';
import { colorPalette } from '../colors';

export interface CompanyListProps {
    rows: rowType[];
    sx?: SxProps
}

export type rowType = {
    id: string,
    company: string,
    img: string,
}

export const CompanyList: FC<CompanyListProps> = ({ rows, sx }) => {

    const [selected, setSelected] = useState<readonly string[]>([]);

    const isSelected = (_id: string) => selected.indexOf(_id) !== -1;

    const handleClick = (event: React.MouseEvent<unknown>, _id: string) => {
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
        <Paper
            sx={sx}
        >
            <TableContainer sx={{ wsidth: '100%' }}>
                <MuiTable>
                    <TableBody>
                        {
                            rows.map((_el: rowType, _index: number) => {
                                const isItemSelected = isSelected(_el.id);
                                const labelId = `company-table-checkbox-${_index}`;

                                return (
                                    <TableRow
                                        key={_el.id}
                                        hover={false}
                                        onClick={(event) => handleClick(event, _el.id)}
                                        role={'checkbox'}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        selected={false}
                                        sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                                    >
                                        <TableCell
                                            padding={'checkbox'}
                                            sx={{ pb: '0px !important' }}
                                        >
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                                sx={{
                                                    color: 'rgba(4, 9, 33, 0.32)',
                                                    '&.Mui-checked': {
                                                        color: colorPalette.blue800
                                                    }
                                                }}
                                            />
                                        </TableCell>

                                        <TableCell align={'left'} sx={{ pl: '0px' }}>

                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                                gap={'10px'}
                                            >
                                                <Avatar
                                                    src={_el.img}
                                                    alt='company-photo'
                                                    sx={{ width: 36, height: 36 }}
                                                />
                                                <Typography fontSize={14}>{_el.company}</Typography>

                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            }
                            )
                        }
                    </TableBody>

                </MuiTable>
            </TableContainer>
        </Paper>
    );
};