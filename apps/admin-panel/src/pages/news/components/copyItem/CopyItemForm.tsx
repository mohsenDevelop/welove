import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import HeaderFormItem from './HeaderFormItem';
import BodyTextFormItem from './BodyTextFormItem';
import LinkFormItem from './LinkFormItem';
import ShareFormItem from './ShareFormItem';
import TagFormItem from './TagFormItem';

const CopyItemForm = () => {

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
                <TagFormItem />
                <LinkFormItem />
                <ShareFormItem />
            </Stack>
        </Formik>
    );
};

export default CopyItemForm;