import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export { router };
