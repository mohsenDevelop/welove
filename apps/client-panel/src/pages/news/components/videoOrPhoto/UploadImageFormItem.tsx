import { useCallback } from 'react';
import { useFormikContext } from 'formik';

import { NewsUploadFile } from 'ui';

const UploadImageFormItem = () => {

    const { values, setFieldValue } = useFormikContext<any>();

    const handleDrop = useCallback((_acceptedFiles: any) => {
        if (_acceptedFiles.length > 0) {

            _acceptedFiles.map((_file: File) => {

                const formData = new FormData();
                formData.append('image', _file);

                setFieldValue('image', _file.name);
                // uploadFileMutation(formData, (resp: any) => {
                //     onImage(resp?.image);
                //     setFileUploaded(_file);
                // });

            });
        }
    }, []);

    return (
        <NewsUploadFile
            type={'image'}
            onDrop={handleDrop}
            uploadedFile={values.image}
            onRemoveFile={() => setFieldValue('image', '')}
        />
    );
};

export default UploadImageFormItem;