import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHeader from './TableHeader';

import {
    colorPalette,
    Tag
} from 'ui';
import TableActions from './TableActions';

const rows = [
    {
        id: '1',
        img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        fullName: 'Randy Calzoni',
        location: 'London,United kingdom',
        title: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '2',
        img: 'https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera.jpg?ver=6',
        fullName: 'Adison Dorwart',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '3',
        img: 'https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call.jpg?ver=6',
        fullName: 'Ahmad Saris',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '4',
        img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        fullName: 'Anika Gouse',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ruMw6uC1bRmy4qlg0lBx8tkh1kZhDFvXGM_Z2AR1E-vjb9maA6I-ompBRlkc4qNYSAQ&usqp=CAU',
        fullName: 'Lydia Westervelt',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKC4Fp33Lcu_LAShHc8wihtLWCvJkhNwhXz0uTLdsW0tdBMzLa2kjGp3TVk2wB0r_eG-Y&usqp=CAU',
        fullName: 'Tiana Vetrovs',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
    {
        id: '7',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZ1q3GHWdMzs8_YpZe15IylJ1s77r5ymwt3xeFYbw29NBbj4lHU5oX82C-PtJ7iasucs&usqp=CAU',
        fullName: 'Gustavo Mango',
        location: 'London,United kingdom',
        Sectors: 'Lorem',
        points: 1000,
        shares: 150,
        applicatoins: 45,
        hires: 2,
    },
];

const Table = () => {
    return (
        <TableContainer sx={{ width: '100%', pt: '16px' }}>
            <MuiTable>
                <TableHeader />
                <TableBody>
                    {
                        rows.map((_el, _index: number) => (
                            <TableRow
                                key={_el.id}
                                hover={false}
                                sx={
                                    {
                                        '& td': {
                                            borderBottom: 'unset',
                                            pb: '20px',
                                            bgcolor: _index % 2 === 0 ? colorPalette.pink10 : 'inherit',
                                            ':first-child': { borderRadius: '10px 0px 0px 10px' },
                                            ':last-child': { borderRadius: '0px 10px 10px 0px' },
                                        },
                                        borderRadius: '10px'
                                    }}
                            >

                                <TableCell align={'left'} sx={{ pl: '16px' }}>
                                    <Typography fontSize={14}>{_el.id}</Typography>
                                </TableCell>

                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        gap={'10px'}
                                    >
                                        <Avatar
                                            src={_el.img}
                                            alt='user-photo'
                                            sx={{ width: 36, height: 36 }}
                                        />
                                        <Stack>
                                            <Typography fontSize={14} fontWeight={500}>{_el.fullName}</Typography>
                                            <Typography fontSize={12}>{_el.location}</Typography>
                                        </Stack>

                                    </Box>
                                </TableCell>

                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Typography fontSize={14}>Title placeholder text</Typography>
                                </TableCell>

                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Stack>
                                        <Typography fontSize={14} fontWeight={500}>WP:GU16 7HF </Typography>
                                        <Typography fontSize={12}>HP: 0NY</Typography>
                                    </Stack>
                                </TableCell>

                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Tag
                                        mode={'square'}
                                        type={'success'}
                                        title={'Sent'}
                                        sx={{
                                            width: 68
                                        }}
                                    />
                                </TableCell>

                                <TableCell align={'right'}>
                                    <TableActions />
                                </TableCell>


                            </TableRow>
                        ))
                    }
                </TableBody>

            </MuiTable>
        </TableContainer>
    );
};

export default Table;