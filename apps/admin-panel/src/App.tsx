import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '@styles/theme';
import { store } from '@store/store';

function App() {

  return (
    <Provider store={store}>

      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <BrowserRouter></BrowserRouter>
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
