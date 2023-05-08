import Typography from '@mui/material/Typography';

import AdminThemeProvider from './AdminThemeProvider';
import ColorsList from './ColorsList';
import Template from './Template';

const AdminTheme = () => {
  return (
    <AdminThemeProvider>
      <Typography
        variant={'h1'}
        fontSize={20}
        pb={'34px'}
        pt={'64px'}
      >
        Theme
      </Typography>

      <ColorsList />
      <Template />

    </AdminThemeProvider>
  )
}

export default AdminTheme;