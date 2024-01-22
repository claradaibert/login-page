import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";

// Util import
import { toastConfig } from "./config/toast";

// Route import
import { router } from "./routes";

// Hook import
import { AuthContextProvider } from "./hooks/useAuth";

// Style import
import { theme } from "./styles/themes/theme";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer {...toastConfig} />
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
