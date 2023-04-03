import { FC } from 'react';
import Stack from '@mui/material/Stack';

import { colorPalette } from '../colors';
import Bio, { BioProps } from './Bio';
import Gallery, { GalleryProps } from './Gallery';
import Actions from './Actions';
import Description from './Description';
import Comment from './Comment';

export enum storyType {
    restaurant = 'restaurant',
    chef = 'chef',
    foodie = 'foodie',
}

export interface StoryProps {
    type: 'restaurant' | 'chef' | 'foodie',
    bio: BioProps,
    gallery: GalleryProps,
    hasComment?: boolean,
}

export const colorType = {
    [storyType.restaurant]: colorPalette.green300,
    [storyType.chef]: colorPalette.purple500,
    [storyType.foodie]: colorPalette.orange150,
};

export const Story: FC<StoryProps> = ({
    type,
    bio,
    hasComment,
    gallery
}) => {
    return (
        <Stack
            width={'100%'}
            border={`10px solid ${colorType[type]}`}
            borderRadius={'8px'}
            bgcolor={colorPalette.white}
            p={'20px 30px 36px 30px'}
        >
            <Bio
                img={bio.img}
                fullName={bio.fullName}
                location={bio.location}
                type={type}
            />

            <Gallery images={gallery.images} />

            <Actions
                type={type}
            />

            <Description type={type} />

            {type === 'chef' && hasComment && <Comment />}

        </Stack>
    );
};