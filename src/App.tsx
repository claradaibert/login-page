import React from 'react';
import { ThemeProvider } from 'styled-components';

// Style import
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        hello
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
