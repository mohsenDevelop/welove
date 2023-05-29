import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

import { Paper, Button, colorPalette } from 'ui';

const rows = [
    {
        id: '1',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '2',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '3',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
    {
        id: '4',
        fullName: 'Randy Calzoni',
        email: 'test@gmail.com',
        company: 'Company placeholder',
    },
];

const EmployeesTable = () => {

    const navigate = useNavigate();

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
        <>
            <Paper
                sx={{
                    border: '1px solid rgba(0, 0, 0, 0.25)',
                    borderRadius: '20px',
                    p: '24px 50px 24px 14px',
                    maxHeight: '390px',
                    overflowY: 'scroll',
                    mt: '17px'
                }}
            >
                <TableContainer sx={{ width: '100%' }}>
                    <MuiTable>
                        {/* <EmployeeTableHeader /> */}
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            flexDirection={'row'}
                            gap={'14px'}
                            pb={'4px'}
                            mb={'16px'}
                            sx={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.15)'
                            }}
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
                                Select all
                            </Typography>
                        </Box>
                        <TableBody>
                            {
                                rows.map((_el, _index) => {

                                    const isItemSelected = isSelected(_el.id);
                                    const labelId = `employees-table-checkbox-${_index}`;

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

                                                sx={{ pl: '0px' }}
                                            >
                                                <Box
                                                    display={'flex'}
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
                                                        gap={'6px'}
                                                    >
                                                        <Stack
                                                            flexDirection={'row'}
                                                            alignItems={'center'}
                                                            gap={'6px'}
                                                        >
                                                            <Typography
                                                                fontSize={15}
                                                                fontWeight={600}
                                                            >
                                                                Randy Calzoni
                                                            </Typography>

                                                            <Typography
                                                                component={'span'}
                                                                bgcolor={colorPalette.gray900}
                                                                padding={'1.5px'}
                                                                borderRadius={'50%'} />

                                                            <Typography
                                                                fontSize={14}
                                                                fontWeight={600}
                                                            >
                                                                IT
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

                                                    </Box>

                                                </Box>
                                            </TableCell>


                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </MuiTable>
                </TableContainer>
            </Paper>

            <Stack
                flexDirection={'row-reverse'}
                gap={'15px'}
                pt={'33px'}
            >
                <Button
                    variant={'contained'}
                    type={'submit'}
                    backgroundColor={colorPalette.pink200}
                    LabelColor={colorPalette.white}
                    sx={{ width: 115 }}
                >
                    Submit
                </Button>

                <Button
                    variant={'outlined'}
                    type={'button'}
                    LabelColor={colorPalette.gray900}
                    borderColor={colorPalette.white}
                    sx={{ width: 114 }}
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </Button>

            </Stack>
        </>
    );
};

export default EmployeesTable;