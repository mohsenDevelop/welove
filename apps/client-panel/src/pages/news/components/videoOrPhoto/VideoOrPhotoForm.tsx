import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import { Button, colorPalette } from 'ui';
import HeaderFormItem from '../copyItem/HeaderFormItem';
import BodyTextFormItem from '../copyItem/BodyTextFormItem';
import TagFormItem from '../copyItem/TagFormItem';
import LinkFormItem from '../copyItem/LinkFormItem';
import ShareFormItem from '../copyItem/ShareFormItem';
import UploadVideoFormItem from './UploadVideoFormItem';
import UploadImageFormItem from './UploadImageFormItem';

const VideoOrPhotoForm = () => {
    return (
        <Formik
            initialValues={{
                header: '',
                body: '',
                tags: [],
                link: '',
                video: '',
                image: '',
            }}
            onSubmit={(values, actions) => {
                console.log({ values });
            }}
        >
            {
                ({ isValid, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <Stack
                            gap={'44px'}
                        >
                            <HeaderFormItem />
                            <BodyTextFormItem />
                            <LinkFormItem />
                            <TagFormItem />
                            <UploadVideoFormItem />
                            <UploadImageFormItem />
                            <ShareFormItem />

                            <Stack
                                flexDirection={'row-reverse'}
                            >
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.purple}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 122 }}
                                >
                                    Publish
                                </Button>
                            </Stack>

                        </Stack>
                    </form>
                )
            }

        </Formik>
    );
};

export default VideoOrPhotoForm;