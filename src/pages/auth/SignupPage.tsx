import React from "react";
import SignUp from "./SignUp";
import AuthLayout from "../../components/AuthLayout";

const SignupPage = () => {
  return <div><AuthLayout children={<SignUp/>}/></div>
  
};

export default SignupPage;
