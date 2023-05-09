import { useCallback } from 'react';
import { useFormikContext } from 'formik';

import { NewsUploadFile } from 'ui';

const UploadVideoFormItem = () => {

    const { values, setFieldValue } = useFormikContext<any>();

    const handleDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);

                setFieldValue('video', _file.name);
                // uploadFileMutation(formData, (resp: any) => {
                //     onImage(resp?.image);
                //     setFileUploaded(_file);
                // });

            });
        }
    }, []);

    return (
        <NewsUploadFile
            type={'video'}
            onDrop={handleDrop}
            uploadedFile={values.video}
            onRemoveFile={() => setFieldValue('video', '')}
        />
    );
};

export default UploadVideoFormItem;