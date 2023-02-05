import React,{useReducer, useState} from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import CustomInput from "../../components/CustomInput";
import CustomLabel from "../../components/CustomLabel";
import { formReducer } from "../../reducer/formReducer";
import { ActionTypes, ErrorType } from "../../model/types";
import CustomButton from "../../components/CustomButton";
import {FcGoogle} from "react-icons/fc"


const SignUp = () => {
  const initialState = {
    name:'',
    email: ''
}
  const [state, dispatch]:any = useReducer<any>(formReducer, initialState)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const googleProvider = new GoogleAuthProvider()

  const handleVisisble =(e:any) =>{
    setVisible(prev => !prev)
  }
  const handleInputChange= (event:any)=>{
    const {name, value} = event.target
    dispatch({
      type: ActionTypes.textInput,
      payload: { key: [name], value: value },
    })
  }
  const {name, email, password} = state
  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    if(!name || !email || !password){
      setError('Please provide all details')
    }
    try {
      console.log(email, password);
      if (name && password && email) {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       console.log(res,'response')
       // navigate("/login");
      }

      setLoading(true);
      setError("");
    } catch (error: any) {
      console.log(error.message);
      if (error.message) {
        setError("Email already exists");
      }
      setTimeout(() => {
        setError("Account creation failed");
      }, 1000);
    }
    setLoading(false);
   
  }
  const signInWithGoogle = async (e:any) =>{
    e.preventDefault()
    try{
      await signInWithPopup(auth, googleProvider)
    }
    catch(error:any){
      console.log(error.message);
      

    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full">
        <p>{error}</p>
        <div className="my-4">
          <CustomLabel>Name</CustomLabel>
          <CustomInput placeholder="John Doe" name="name" onChange={handleInputChange} type="text" value={name || ''}/>
        </div>
        <div className="my-4">
          <CustomLabel>Email</CustomLabel>
          <CustomInput placeholder="johndoe@gmail.com" name="email" onChange={handleInputChange} type="text"  value={email || ''}/>
        </div>
        <div className="my-4">
          <CustomLabel>Password</CustomLabel>
          <div className="relative">
          <CustomInput name="password" onChange={handleInputChange} type={visible ? "text" :"password"} value={password || ''}/>
            <div onClick={handleVisisble} className="absolute right-2 top-3">
            {visible ? <AiFillEyeInvisible/> : <AiFillEye/>}
            </div>
          
          </div>
          
        </div>
        <div className="my-4 block  md:flex justify-between">
          <p>Have an account? <span className="text-primary-color">Sign in</span></p>
          <p>Forgot password?</p>
        </div>
        <div className="my-4">
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
      <form onSubmit={signInWithGoogle}>
       <div className="my-4 items-center flex before:border-t-2 before:flex-1  before:border-gray-500  after:border-t-2 after:flex-1  after:border-gray-500">
        <p className="uppercase text-center font-medium text-2xl mx-2">or</p>
       </div>
       
       <CustomButton name="Continue with Google" type="submit">
          <FcGoogle/>
          <p className="ml-4">Continue with Google</p>
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
