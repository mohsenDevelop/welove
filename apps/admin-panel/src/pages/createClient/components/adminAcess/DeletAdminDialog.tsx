import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
  Dialog,
  colorPalette,
  Button
} from 'ui';
import { CloseIcon } from 'assets-ui'

const DeletAdminDialog = () => {

  const navigate = useNavigate();

  return (
    <Dialog
      open={true}
      onClose={() => navigate(-1)}
      width={'620px'}
    >
      <Stack
        p={'34px 34px 24px 34px'}
      >
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={'31px'}
        >
          <Typography
            fontSize={20}
            fontWeight={600}
          >
            Are your sure?
          </Typography>
          <CloseIcon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </Stack>

        <Typography
          fontSize={16}
          fontWeight={500}
          sx={{ opacity: .8 }}
          pb={'54px'}
        >
          Lorem ipsum dolor sit amet consectetur. Dictum a id facilisi orci habitant venenatis eu.
        </Typography>

        <Stack
          flexDirection={'row-reverse'}
          gap={'8px'}
        >
          <Button
            variant={'contained'}
            type={'submit'}
            backgroundColor={colorPalette.red250}
            LabelColor={colorPalette.white}
            sx={{ width: 111 }}
          >
            Delete
          </Button>

          <Button
            variant={'outlined'}
            borderColor={'rgba(39, 64, 82, 0.15)'}
            LabelColor={colorPalette.gray900}
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default DeletAdminDialog;