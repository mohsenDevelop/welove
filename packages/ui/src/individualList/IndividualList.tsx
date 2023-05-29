import { FC, useState, ChangeEvent } from 'react';
import { SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

import { Paper } from '../paper/Paper';
import { colorPalette } from '../colors';

export interface IndividualListProps {
    rows: IndividuaRowsType[];
    sx?: SxProps
}

export type IndividuaRowsType = {
    id: string,
    fullName: string,
    postalCode: string,
    workCode: string,
    division: string,
    jobTitle: string,
    location: string,
}

export const IndividualList: FC<IndividualListProps> = ({ rows, sx }) => {

    const [selected, setSelected] = useState<readonly string[]>([]);

    const isSelected = (_id: string) => selected.indexOf(_id) !== -1;

    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement & any>) => {

        if (event.target.checked) {
            //   const newSelected = rows.map((n) => n.name);
            const newSelected = ['0', '1', '2', '3', '4'];
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

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
            <TableContainer sx={{ width: '100%' }}>
                <MuiTable>
                    <TableHead>

                        <TableRow
                            sx={{
                                '& th': { borderBottom: '1px solid rgba(0, 0, 0, 0.08)', pl: '0px', pb: '4px' }
                            }}
                        >

                            <TableCell
                                align={'left'}
                            >
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    flexDirection={'row'}
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

                                    <Typography
                                        fontSize={14}
                                        fontWeight={500}
                                    >
                                        Full name
                                    </Typography>
                                </Box>
                            </TableCell>

                            <TableCell
                                align={'left'}
                            >
                                Division
                            </TableCell>
                            <TableCell
                                align={'left'}
                            >
                                Title
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody sx={{ transform: 'translateY(16px)' }}>
                        {
                            rows.map((_el: IndividuaRowsType, _index) => {

                                const isItemSelected = isSelected(_el.id);
                                const labelId = `individuals-table-checkbox-${_index}`;

                                return (
                                    <TableRow
                                        key={_el.id}
                                        hover={false}
                                        onClick={(event) => handleClick(event, _el.id)}
                                        role={'checkbox'}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        selected={false}
                                        sx={
                                            {
                                                '& td': {
                                                    borderBottom: 'unset',
                                                    pb: '20px',
                                                    ':first-child': { borderRadius: '6px' },
                                                },
                                            }}
                                    >
                                        <TableCell
                                            padding={'checkbox'}
                                            sx={{ pl: '0px', width: 400 }}
                                        >
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                                flexDirection={'row'}
                                                gap={'6px'}
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

                                                <Box
                                                    display={'flex'}
                                                    flexDirection={'column'}
                                                    gap={'4px'}
                                                >
                                                    <Stack
                                                        flexDirection={'row'}
                                                        alignItems={'center'}
                                                        gap={'6px'}
                                                    >
                                                        <Typography
                                                            fontSize={12}
                                                            fontWeight={400}
                                                        >
                                                            Randy Calzoni
                                                        </Typography>

                                                        <Typography
                                                            component={'span'}
                                                            bgcolor={colorPalette.gray900}
                                                            padding={'1.5px'}
                                                            borderRadius={'50%'} />

                                                        <Typography
                                                            fontSize={12}
                                                            fontWeight={600}
                                                        >
                                                            WP:GU16 7HF
                                                        </Typography>

                                                        <Typography
                                                            component={'span'}
                                                            bgcolor={colorPalette.gray900}
                                                            padding={'1.5px'}
                                                            borderRadius={'50%'} />

                                                        <Typography
                                                            fontSize={12}
                                                            fontWeight={600}
                                                        >
                                                            HP: 0NY
                                                        </Typography>
                                                    </Stack>

                                                    <Stack
                                                        flexDirection={'row'}
                                                        alignItems={'center'}
                                                        gap={'6px'}
                                                    >
                                                        <Typography
                                                            fontSize={12}
                                                            fontWeight={400}
                                                        >
                                                            London,United kingdom
                                                        </Typography>

                                                    </Stack>

                                                </Box>

                                            </Box>
                                        </TableCell>

                                        <TableCell
                                            sx={{ pl: '0px' }}
                                        >
                                            <Typography
                                                fontSize={12}
                                                fontWeight={500}
                                            >
                                                Designer
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            sx={{ pl: '0px' }}
                                        >
                                            <Typography
                                                fontSize={12}
                                                fontWeight={500}
                                            >
                                                Title Placeholder text
                                            </Typography>
                                        </TableCell>

                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </Paper >
    );
};