import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabProps } from '@mui/material/Tabs';

import { colorPalette } from '../colors';

export interface TabsProps extends MuiTabProps {
    indicatecolor: string;
}

export const Tabs: FC<TabsProps> = (props) => {
    return (
        <MuiTabs
            sx={{
                '& .MuiTabs-indicator': {
                    bgcolor: props.indicatecolor
                },
                '& .MuiTab-root': {
                    pl: '0px',
                    mr: '24px'
                },
                '& .MuiTab-root.Mui-selected': {
                    color: colorPalette.blue800,
                    fontWeight: 600,
                }
            }}
            {...props}
        >
            {props.children}
        </MuiTabs>
    );
};