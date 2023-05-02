import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SocialTopClientHeader: FC<SocialTopClientHeaderProps> = ({ renderSearch, renderCsv }) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            borderBottom={'1px solid rgba(0, 0, 0, 0.08)'}
            pb={'24px'}
        >

            <Typography
                fontSize={17}
                fontWeight={600}
                variant={'h1'}
            >
                Top Clients
                <Typography
                    component={'span'}
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={600}
                    pl={'8px'}
                >
                    (by social network activity?)
                </Typography>
            </Typography>

            <Stack
                flexDirection={'row'}
                gap={'10px'}
            >
                {
                    renderSearch()
                }

                {
                    renderCsv()
                }

            </Stack>
        </Stack>
    );
};

export interface SocialTopClientHeaderProps {
    renderSearch: () => ReactNode;
    renderCsv: () => ReactNode;
}
export default SocialTopClientHeader;