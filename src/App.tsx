import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer} from 'react-toastify'

// Util import
import { toastConfig } from './config/toast';

// Page import
import { Login } from './pages/Login';

// Style import
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer {...toastConfig} />
      <Login />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
