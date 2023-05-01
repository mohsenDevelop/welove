import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PerformanceHeader: FC<PerformanceHeaderProps> = ({ renderSearch, renderCsv }) => {
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
                Rewards List
                <Typography
                    component={'span'}
                    variant={'h1'}
                    fontSize={14}
                    fontWeight={600}
                    pl={'8px'}
                >
                    (1,201)
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

export interface PerformanceHeaderProps {
    renderSearch: () => ReactNode;
    renderCsv: () => ReactNode;
}
export default PerformanceHeader;