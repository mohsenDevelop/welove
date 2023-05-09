import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import { Button, colorPalette } from 'ui';
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
            {
                ({ handleSubmit, isValid }) => (
                    <form onSubmit={handleSubmit}>
                        <Stack
                            gap={'44px'}
                        >
                            <HeaderFormItem />
                            <BodyTextFormItem />
                            <TagFormItem />
                            <LinkFormItem />
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

export default CopyItemForm;