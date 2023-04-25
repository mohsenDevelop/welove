import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import HeaderFormItem from '../copyItem/HeaderFormItem';
import BodyTextFormItem from '../copyItem/BodyTextFormItem';
import TagFormItem from '../copyItem/TagFormItem';
import LinkFormItem from '../copyItem/LinkFormItem';
import ShareFormItem from '../copyItem/ShareFormItem';

const VideoOrPhotoForm = () => {
    return (
        <Formik
            initialValues={{
                header: '',
                body: '',
                tags: [],
                link: '',
            }}
            onSubmit={(values, actions) => {
                console.log({ values });
            }}
        >
            <Stack
                gap={'44px'}
            >
                <HeaderFormItem />
                <BodyTextFormItem />
                <LinkFormItem />
                <TagFormItem />
                <ShareFormItem />
            </Stack>
        </Formik>
    );
};

export default VideoOrPhotoForm;