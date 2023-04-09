import { FC } from 'react';
import { PaginationProps } from '@mui/material';
import PaginationItem from '@mui/material/PaginationItem';

import { CustomPagination } from './style';

export const TablePagination: FC<PaginationProps> = (props) => {
    return (
        <CustomPagination
            {...props}
            renderItem={(item: any) => (
                <PaginationItem
                    {...item}
                />
            )}
        />
    );
};