import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '@styles/theme';
import { store } from '@store/store';
import MainRoutes from '@routes/MainRoutes';

function App() {

  return (

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <div>heloo</div>
          <RouterProvider router={MainRoutes} />
        </StyledEngineProvider>
      </ThemeProvider>

      <ToastContainer
        position='top-left'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>

  );
}

export default App;
