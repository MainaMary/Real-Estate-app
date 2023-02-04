import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Error from "../pages/error/Error";
import Offers from "../pages/offers/Offers";
const ROOT = "/";
const SIGNIN = "/login";
const REGISTER = "/register";
const OFFERS ="/offers"
const NOTFOUND = "*";
export const allRoutes = createBrowserRouter([
  {
    path: ROOT,
    element: <Homepage />,
  },
  {
    path: SIGNIN,
    element: <SignIn />,
  },
  {
    path: REGISTER,
    element: <SignUp />,
  },
  {
    path: OFFERS,
    element: <Offers/>
  },
  {
    path: NOTFOUND,
    element: <Error />,
  },
]);
