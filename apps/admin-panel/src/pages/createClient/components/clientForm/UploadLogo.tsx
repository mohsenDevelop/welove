import { useCallback, memo } from 'react';
import { useFormikContext } from 'formik';
import { useDropzone } from 'react-dropzone';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import {
    Button,
    colorPalette
} from 'ui';

const UploadLogo = () => {

    const { setFieldValue, values } = useFormikContext<any>();

    const onDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);

                setFieldValue('logo', _file);
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
        <Grid
            container={true}
            direction={'row'}
            alignItems={'center'}
            wrap={'nowrap'}
            gap={'47px'}
        >
            <input {...getInputProps()} />

            <Grid
                item={true}
                md={5}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={'6px'}

                >


                    <Avatar
                        src={values?.logo ? URL.createObjectURL(values.logo) : ''}
                        alt='client-logo'
                        sx={{ width: 64, height: 64 }}
                    />

                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        * Logo
                    </Typography>

                </Stack>
            </Grid>


            <Grid
                item={true}
                md={7}
            >
                <Button
                    fullWidth={true}
                    variant={'outlined'}
                    borderColor={'rgba(39, 64, 82, 0.15)'}
                    LabelColor={colorPalette.purple}
                    {...getRootProps({ className: 'dropzone' })}
                >
                    Choose file
                </Button>
            </Grid>

        </Grid>
    );
};

export default memo(UploadLogo);