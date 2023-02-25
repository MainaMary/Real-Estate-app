import React from "react";
import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Error from "../pages/error/Error";
import Offers from "../pages/offers/Offers";
import RootLayout from "../layout/RootLayout";
import AddList from "../pages/listing/AddList";
import PublicRoute from "./Public";
const Homepage = React.lazy(()=>import('../pages/Homepage'))
const SignupPage = React.lazy(()=> import("../pages/auth/SignupPage"))
const SigninPage = React.lazy(()=> import("../pages/auth/SigninPage"))
const ROOT = "/";
const SIGNIN = "/login";
const REGISTER = "/register";
const OFFERS ="/offers"
const ADD_LIST ="/addList"
const NOTFOUND = "*";
export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROOT} element={<RootLayout/>}>
      
      <Route index element={<Homepage/>}/>
     
     
      <Route path={SIGNIN} element={<SigninPage/>}/>
      <Route path={REGISTER} element={<SignupPage/>}/>
      <Route path={OFFERS} element={<Offers/>}/>
      <Route path={ADD_LIST} element={<AddList/>}/>
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
