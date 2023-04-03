import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { UpvoteIcon, ShareIcon } from 'assets-ui';
import { colorPalette } from '../colors';
import { storyType } from '..';

export const colorType = {
    [storyType.restaurant]: colorPalette.green750,
    [storyType.chef]: colorPalette.purple500,
    [storyType.foodie]: colorPalette.orange150,
};

export const colorTypeSvg = {
    [storyType.restaurant]: colorPalette.green300,
    [storyType.chef]: colorPalette.purple500,
    [storyType.foodie]: colorPalette.orange150,
};

export interface ActionsProps {
    type: 'restaurant' | 'chef' | 'foodie',
}

const Actions: FC<ActionsProps> = ({
    type,
}) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            gap={'5px'}
            pt={'28px'}
        >
            <UpvoteIcon color={colorTypeSvg[type]} />
            <Typography
                fontSize={16}
                fontWeight={600}
                color={colorType[type]}
                pr={'10px'}
            >
                Upvote 34
            </Typography>

            <ShareIcon color={colorTypeSvg[type]} />
            <Typography
                fontSize={16}
                fontWeight={600}
                color={colorType[type]}
            >
                Share
            </Typography>

        </Stack>
    );
};

export default Actions;