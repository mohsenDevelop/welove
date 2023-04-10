import { FC } from 'react';
import MuiTabs, { TabsProps as MuiTabProps } from '@mui/material/Tabs';

import { colorPalette } from '../colors';

export interface TabsProps extends MuiTabProps {
    indicateColor: string;
}

export const Tabs: FC<TabsProps> = (props) => {
    return (
        <MuiTabs
            sx={{
                '& .MuiTabs-indicator': {
                    bgcolor: props.indicateColor
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