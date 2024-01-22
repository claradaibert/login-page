import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Profile } from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

]);

export { router };
