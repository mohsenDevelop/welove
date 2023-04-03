import { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { colorPalette } from '../colors';
import { ImageIcon, UploadIcon } from 'assets-ui';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// import { useUploadApi } from '@api/useUpload';

export const ImageUpload: FC<IImageUpload> = ({ maxSize = 4000000, width, height, imageUrl, onFileUrl, onError }) => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<any>(false);
    // const { uploadFile, submitting } = useUploadApi();

    useEffect(() => {
        if (data) {
            onFileUrl(data.url);
        }
    }, [data]);

    const onDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles?.length > 0) {
            _acceptedFiles.map((_file: any) => {

                if (_file?.size <= maxSize) {

                    // uploadFile(_file, (resp: any) => {
                    //     setData(resp);
                    // });
                    setData('resp');
                } else {
                    onError!();
                }

            });
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: { 'image/png': [], 'image/jpg': [], 'image/svg': [], 'image/jpeg': [] },
        onDrop,
    });

    return (
        <Box
            {...getRootProps({ className: 'dropzone' })}
            width={width ?? '100%'}
            height={height ?? '165px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ cursor: 'pointer', border: `2px dashed ${colorPalette.gray30}`, borderRadius: '8px' }}
        >
            <input {...getInputProps()} />
            <Stack alignItems={'center'}>
                {loading ? <CircularProgress
                    style={{ width: '24px', height: '24px', color: colorPalette.green720 }} /> : <ImageIcon />}
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'12px'}
                    mt={'20px'}
                >
                    <UploadIcon />
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        Drag & drop or
                        <Typography
                            component={'span'}
                            fontSize={16}
                            fontWeight={600}
                            color={colorPalette.green750}
                            sx={{ textDecoration: 'underline' }}
                        >
                            {' ' + 'browse' + ' '}
                        </Typography>
                        photo
                    </Typography>
                </Stack>
            </Stack>

        </Box>
    );
};
export interface IImageUpload {
    width?: string;
    height?: string;
    maxSize?: string | number;
    imageUrl?: any;
    onFileUrl: (file: any) => void;
    onError?: () => void;
}
export default ImageUpload;