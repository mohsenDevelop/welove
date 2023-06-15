import { FC, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Button } from '../button/Button';
import { colorPalette } from '../colors';

export interface NewsUploadFileProps {
    type: 'video' | 'image';
    onDrop: (files: any) => void;
    uploadedFile: any;
    onRemoveFile: () => void;
}

const NewsUploadFileMemo: FC<NewsUploadFileProps> = ({ type, onDrop, uploadedFile, onRemoveFile }) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'], },
        onDrop,
        maxSize: 2000000,
        maxFiles: 1
    });

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <input {...getInputProps()} />
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'15px'}
            >
                <Box
                    width={44}
                    height={44}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'6px'}
                    bgcolor={type === 'video' ? colorPalette.gray550 : colorPalette.AquaBlue200}
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M9 16H11V13H14V11H11V8H9V11H6V13H9V16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H16C16.55 4 17.021 4.196 17.413 4.588C17.8043 4.97933 18 5.45 18 6V10.5L22 6.5V17.5L18 13.5V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H4ZM4 18H16V6H4V18ZM4 18V6V18Z'
                            fill='white' />
                    </svg>

                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'7px'}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                        color={colorPalette.gray900}
                    >
                        {type === 'video' ? 'Video' : 'Image'}
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={colorPalette.gray900}
                        sx={{ opacity: .7 }}
                    >
                        From your device, lorem ipsum,lorem
                    </Typography>

                </Box>
            </Stack>

            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'16px'}
            >

                {
                    uploadedFile.length ?
                        <Button
                            variant={'outlined'}
                            borderColor={'rgba(39, 64, 82, 0.15)'}
                            LabelColor={colorPalette.blue800}
                            startIcon={
                                <svg
                                    width='18'
                                    height='18'
                                    viewBox='0 0 18 18'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g opacity='0.6'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M13.5 6C13.9142 6 14.25 6.33579 14.25 6.75V14.25C14.25 15.4926 13.2426 16.5 12 16.5H6C4.75736 16.5 3.75 15.4926 3.75 14.25V6.75C3.75 6.33579 4.08579 6 4.5 6C4.91421 6 5.25 6.33579 5.25 6.75V14.25C5.25 14.6642 5.58579 15 6 15H12C12.4142 15 12.75 14.6642 12.75 14.25V6.75C12.75 6.33579 13.0858 6 13.5 6ZM7.5 7.5C7.91421 7.5 8.25 7.83579 8.25 8.25V12.75C8.25 13.1642 7.91421 13.5 7.5 13.5C7.08579 13.5 6.75 13.1642 6.75 12.75V8.25C6.75 7.83579 7.08579 7.5 7.5 7.5ZM10.5 7.5C10.8846 7.5 11.2016 7.78953 11.245 8.16253L11.25 8.25V12.75C11.25 13.1642 10.9142 13.5 10.5 13.5C10.1154 13.5 9.79837 13.2105 9.75505 12.8375L9.75 12.75V8.25C9.75 7.83579 10.0858 7.5 10.5 7.5ZM10.5 1.5C10.9142 1.5 11.25 1.83579 11.25 2.25V3H15C15.4142 3 15.75 3.33579 15.75 3.75C15.75 4.16421 15.4142 4.5 15 4.5H3C2.58579 4.5 2.25 4.16421 2.25 3.75C2.25 3.33579 2.58579 3 3 3H6.75V2.25C6.75 1.83579 7.08579 1.5 7.5 1.5H10.5Z'
                                            fill='#274052'
                                        />
                                    </g>
                                </svg>
                            }
                            sx={{
                                width: type === 'video' ? 156 : 161
                            }}
                            onClick={onRemoveFile}
                        >
                            {type === 'video' ? 'Remove video' : 'Remove image'}
                        </Button>
                        :
                        null
                }

                <Button
                    variant={'outlined'}
                    borderColor={uploadedFile.length ? colorPalette.Grape200 : 'rgba(0, 0, 0, 0.15)'}
                    LabelColor={uploadedFile.length ? colorPalette.Grape200 : colorPalette.purple}
                    startIcon={uploadedFile.length ? <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M17.2703 5.25877C17.5876 5.59212 17.5746 6.1196 17.2412 6.43692L7.61162 15.6036C7.44717 15.7601 7.22597 15.8428 6.99916 15.8325C6.77236 15.8222 6.55958 15.7197 6.41003 15.5489L2.70633 11.3181C2.40318 10.9718 2.43815 10.4454 2.78444 10.1422C3.13073 9.83907 3.65721 9.87404 3.96036 10.2203L7.09178 13.7974L16.0921 5.22975C16.4255 4.91242 16.9529 4.92542 17.2703 5.25877Z'
                            fill='#C2BE33' />

                    </svg>
                        :
                        null
                    }

                    sx={{
                        width: 135
                    }}
                    {...getRootProps({ className: 'dropzone' })}
                >
                    {uploadedFile.length ? 'Added' : 'Add'}
                </Button>

            </Stack>
        </Stack>
    );
};

export const NewsUploadFile = memo(NewsUploadFileMemo);
