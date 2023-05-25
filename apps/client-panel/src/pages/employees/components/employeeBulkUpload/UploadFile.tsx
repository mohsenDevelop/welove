import { FC, useCallback, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Button, colorPalette } from 'ui';

const UploadFile: FC<UploadFileProps> = ({ fileUploaded, onUploaded, onRemove }) => {

    const onDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);
                console.log({ file: _file });
                onUploaded(_file);
                // uploadFileMutation(formData, (resp: any) => {
                //     onImage(resp?.image);
                //     setFileUploaded(_file);
                // });

            });
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'text/csv': ['.csv', '.xls', '.xlsx'],
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        },
        onDrop,
        maxSize: 5000000,
        maxFiles: 1
    });


    return (
        <Stack gap={'20px'}>
            <input {...getInputProps()} />

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Stack>

                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        Add employees
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        sx={{ opacity: .7 }}
                    >
                        From your device, lorem ipsum,lorem
                    </Typography>

                </Stack>

                <Button
                    variant={'outlined'}
                    type={'button'}
                    borderColor={'rgba(39, 64, 82, 0.2)'}
                    LabelColor={colorPalette.pink200}
                    sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        width: 135
                    }}
                    {...getRootProps({ className: 'dropzone' })}
                >
                    Choose file
                </Button>
            </Stack>

            {
                fileUploaded ?
                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Stack>

                            <Typography
                                fontSize={16}
                                fontWeight={500}
                            >
                                {fileUploaded?.name as any}
                            </Typography>

                            {/* <Typography
                                fontSize={14}
                                fontWeight={400}
                                sx={{ opacity: .7 }}
                            >
                                From your device, lorem ipsum,lorem
                            </Typography> */}

                        </Stack>

                        <Button
                            variant={'outlined'}
                            type={'button'}
                            borderColor={'rgba(39, 64, 82, 0.2)'}
                            LabelColor={colorPalette.blue800}
                            sx={{
                                fontSize: 14,
                                fontWeight: 500,
                                width: 135
                            }}
                            onClick={() => onRemove()}
                        >
                            Remove
                        </Button>
                    </Stack>
                    :
                    null
            }

        </Stack>
    );
};

export interface UploadFileProps {
    fileUploaded: File | null;
    onUploaded: (file: File | string) => void;
    onRemove: () => void;
}

export default memo(UploadFile, (prev, next) => prev.fileUploaded === next.fileUploaded);;