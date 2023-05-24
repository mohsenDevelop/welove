import { FC, useCallback, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import Stack from '@mui/material/Stack';

import { Button, colorPalette } from 'ui';

const UploadAvatar: FC<UploadAvatarProps> = ({ avatar, onUploaded, onRemove }) => {

    const onDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);

                onUploaded(_file);
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
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'31px'}
            >
                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={96}
                    height={96}
                    borderRadius={'50%'}
                    bgcolor={colorPalette.gray70}
                    sx={{
                        cursor: 'pointer',
                        backgroundImage: `url(${avatar ? URL.createObjectURL(avatar as File) : ''})`,
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                />

                <Stack gap={'8px'} flex={1}>
                    <Button
                        variant={'contained'}
                        type={'button'}
                        backgroundColor={colorPalette.blue800}
                        LabelColor={colorPalette.white}
                        fullWidth={true}
                        sx={{
                            fontSize: 16,
                            fontWeight: 700
                        }}
                        {...getRootProps({ className: 'dropzone' })}
                    >
                        Pick an image
                    </Button>

                    <Button
                        variant={'outlined'}
                        type={'button'}
                        borderColor={'rgba(39, 64, 82, 0.2)'}
                        LabelColor={colorPalette.blue800}
                        fullWidth={true}
                        sx={{
                            fontSize: 16,
                            fontWeight: 700
                        }}
                        onClick={() => onRemove()}
                    >
                        Remove
                    </Button>
                </Stack>

            </Stack>
        </>
    );
};

export interface UploadAvatarProps {
    avatar: File | string;
    onUploaded: (file: File | string) => void;
    onRemove: () => void;
}
export default memo(UploadAvatar, (prev, next) => prev.avatar === next.avatar);