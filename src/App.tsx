import React from 'react';
import { ThemeProvider } from 'styled-components';

// Page import
import { Login } from './pages/Login';

// Style import
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
