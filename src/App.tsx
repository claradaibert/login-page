import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";

// Util import
import { toastConfig } from "./config/toast";

// Page import
import { Login } from "./pages/Login";

// Route import
import { router } from "./routes";

// Style import
import { theme } from "./styles/themes/theme";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer {...toastConfig} />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
