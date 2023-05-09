import { useFormikContext } from 'formik';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
    TextTag
} from 'ui';

const CompanySector = () => {

    const { setFieldValue } = useFormikContext();

    return (
        <Grid
            container={true}
            direction={'row'}
            alignItems={'center'}
            wrap={'nowrap'}
            gap={'47px'}
        >

            <Grid
                item={true}
                md={5}
            >
                <Stack
                    gap={'6px'}
                    flex={1}
                >
                    <Typography
                        fontSize={16}
                        fontWeight={500}
                    >
                        * Company sector
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                    </Typography>

                </Stack>

            </Grid>

            <Grid
                item={true}
                md={7}
            >
                <TextTag
                    sx={{ flex: 1 }}
                    onTags={(tags: readonly string[]) => setFieldValue('sectors', tags)}
                />
            </Grid>

        </Grid>
    );
};

export default CompanySector;