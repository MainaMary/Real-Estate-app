import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/auth/SignupPage";
import SigninPage from "../pages/auth/SigninPage";
import Error from "../pages/error/Error";
import Offers from "../pages/offers/Offers";
import RootLayout from "../layout/RootLayout";
const ROOT = "/";
const SIGNIN = "/login";
const REGISTER = "/register";
const OFFERS ="/offers"
const NOTFOUND = "*";
export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROOT} element={<RootLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="login" element={<SigninPage/>}/>
      <Route path="register" element={<SignupPage/>}/>
      <Route path="offers" element={<Offers/>}/>
      <Route path="*" element={<Error/>}/>
      <Route/>
    </Route>
  )
)
export const allRoutes = createBrowserRouter([
  {
    path: ROOT,
    element: <Homepage />,
  },
  {
    path: SIGNIN,
    element: <SigninPage />,
  },
  {
    path: REGISTER,
    element: <SignupPage />,
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
