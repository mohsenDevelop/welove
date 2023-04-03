import { FC } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export interface GalleryProps {
    images: { img: string, cols: number, rows: number }[],
}
const Gallery: FC<GalleryProps> = ({
    images
}) => {

    const renderColumns = (): number | undefined => {
        let cols = 1;
        cols = images.length === 5 || images.length === 3 ? 3 : 2;
        return cols;
    };

    return (
        <ImageList
            variant={'quilted'}
            cols={images.length ? renderColumns() : 1}
            rowHeight={180}
            sx={{ width: '100%', height: 371 }}
        >
            {
                images.length ?
                    images.map((_el, _index) => (
                        <ImageListItem
                            key={_index.toString()}
                            cols={_el.cols || 1}
                            rows={_el.rows || 1}
                        >
                            <img
                                src={`${_el.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${_el.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={'fafs'}
                                style={{ borderRadius: '6px' }}
                                loading={'lazy'}
                            />
                        </ImageListItem>
                    ))
                    :
                    <div />
            }

        </ImageList>
    );
};

export default Gallery;