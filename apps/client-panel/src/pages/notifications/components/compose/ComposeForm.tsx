import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import { Button, colorPalette } from 'ui';
import HeaderFormItem from './HeaderItemForm';
import BodyTextFormItem from './BodyTextFormItem';
import ShareFormItem from './ShareFormItem';

const ComposeForm = () => {
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
                                    sx={{ width: 205 }}
                                >
                                    Send notifications
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                )
            }

        </Formik>
    );
};

export default ComposeForm;