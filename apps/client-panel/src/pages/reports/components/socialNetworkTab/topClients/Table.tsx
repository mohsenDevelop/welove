import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { CircularSocialProgress } from 'ui';
import SocialTabelHeader from './TableHeader';

const rows = [
    {
        id: '1',
        company: 'Company Name Placeholder',
        Facebook: 'Lorem',
        Email: 1000,
        WhatsApp: 150,
        SM1: 45,
        SM2: 2,
    },
    {
        id: '2',
        company: 'Company Name Placeholder',
        Facebook: 'Lorem',
        Email: 1000,
        WhatsApp: 150,
        SM1: 45,
        SM2: 2,
    },
    {
        id: '3',
        company: 'Company Name Placeholder',
        Facebook: 'Lorem',
        Email: 1000,
        WhatsApp: 150,
        SM1: 45,
        SM2: 2,
    },
    {
        id: '4',
        company: 'Company Name Placeholder',
        Facebook: 'Lorem',
        Email: 1000,
        WhatsApp: 150,
        SM1: 45,
        SM2: 2,
    },
    {
        id: '5',
        company: 'Company Name Placeholder',
        Facebook: 'Lorem',
        Email: 1000,
        WhatsApp: 150,
        SM1: 45,
        SM2: 2,
    },
];

const SocialTopClientsTable = () => {
    return (
        <TableContainer sx={{ width: '100%', pt: '16px' }}>

            <MuiTable>
                <SocialTabelHeader />

                <TableBody>
                    {
                        rows.map((_el, _index: number) => (
                            <TableRow
                                key={_el.id}
                                hover={false}
                                sx={{ '& td': { borderBottom: rows.length !== _index + 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset', pb: '20px', } }}
                            >

                                <TableCell align={'left'} sx={{ pl: '0px' }}>
                                    <Typography fontSize={14}>{_el.company}</Typography>
                                </TableCell>

                                <TableCell align={'right'}>
                                    <CircularSocialProgress value={95} />
                                </TableCell>

                                <TableCell align={'right'}>
                                    <CircularSocialProgress value={35} />
                                </TableCell>

                                <TableCell align={'right'}>
                                    <CircularSocialProgress value={20} />
                                </TableCell>

                                <TableCell align={'right'}>
                                    <CircularSocialProgress value={65} />
                                </TableCell>

                                <TableCell align={'right'}>
                                    <CircularSocialProgress value={16} />
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>

            </MuiTable>

        </TableContainer>
    );
};

export default SocialTopClientsTable;