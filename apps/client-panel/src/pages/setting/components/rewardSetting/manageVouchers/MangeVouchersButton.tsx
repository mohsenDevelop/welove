import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
  Button,
  colorPalette,
} from 'ui';
import { VoucherIcon } from 'assets-ui';
import { VOUCHERS_ADMIN_URL } from '@config/urls';

const MangeVouchersButton = () => {

  const navigate = useNavigate();

  return (
    <Stack
      gap={'6px'}
    >
      <Button
        variant={'contained'}
        type={'submit'}
        backgroundColor={colorPalette.pink200}
        LabelColor={colorPalette.white}
        startIcon={<VoucherIcon />}
        sx={{ width: 205, fontWeight: 600 }}
        onClick={() => navigate(VOUCHERS_ADMIN_URL)}
      >
        Manage Vouchers
      </Button>

      <Typography
        fontSize={14}
        fontWeight={400}
        sx={{ opacity: .7 }}
      >
        Update or create new vouchers
      </Typography>
    </Stack>
  );
};

export default MangeVouchersButton;