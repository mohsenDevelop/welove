import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Stack from '@mui/material/Stack';

import { PhotoIcon } from 'assets-ui';

const UploadPhoto: FC<UploadPhotoProps> = ({ onImage }) => {

    const [fileUploaded, setFileUploaded] = useState<File | null>(null);

    const onDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);

                onImage('');
                setFileUploaded(_file);
                // uploadFileMutation(formData, (resp: any) => {
                //     onImage(resp?.image);
                //     setFileUploaded(_file);
                // });

            });
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'], },
        onDrop,
        maxSize: 2000000,
        maxFiles: 1
    });

    return (
        <>
            <input {...getInputProps()} />
            <Stack
                alignItems={'center'}
                justifyContent={'center'}
                width={100}
                height={100}
                border={'1px solid rgba(0, 0, 0, 0.25)'}
                borderRadius={'50%'}
                mt={'34px'}
                sx={{
                    cursor: 'pointer',
                    backgroundImage: `url(${fileUploaded ? URL.createObjectURL(fileUploaded) : ''})`,
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                {...getRootProps({ className: 'dropzone' })}
            >

                {!fileUploaded ? <PhotoIcon /> : null}
            </Stack>
        </>
    );
};

export interface UploadPhotoProps {
    onImage: (link: string) => void;
}

export default UploadPhoto;