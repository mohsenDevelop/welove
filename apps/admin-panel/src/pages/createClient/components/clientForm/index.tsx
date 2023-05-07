import { Formik } from 'formik';
import Stack from '@mui/material/Stack';

import { Button, colorPalette } from 'ui';
import UploadLogo from './UploadLogo';
import CompantName from './CompantName';
import CompanySector from './CompanySector';
import UrlAssigned from './UrlAssigned';
import Address from './Address';
import RecipientEmail from './RecipientEmail';

const ClientForm = () => {
    return (
        <Formik
            initialValues={{
                logo: '',
                companyName: '',
                sectors: [],
                urlAssigned: '',
                address: '',
                email: '',
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
                            <UploadLogo />
                            <CompantName />
                            <CompanySector />
                            <UrlAssigned />
                            <Address />
                            <RecipientEmail />

                            <Stack>
                                <Button
                                    variant={'contained'}
                                    type={'submit'}
                                    backgroundColor={colorPalette.purple}
                                    LabelColor={colorPalette.white}
                                    disabled={!isValid}
                                    sx={{ width: 96 }}
                                >
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                )
            }
        </Formik>
    );
};

export default ClientForm;