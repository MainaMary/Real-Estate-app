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
        await createUserWithEmailAndPassword(auth, email, password);
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
    const signInWithGoogle = async () =>{
      try{
        await signInWithPopup(auth, googleProvider)
      }
      catch(error:any){
        console.log(error.message);
        

      }

    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[35%]">
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
      </form>
      <form>
       <div>Or</div>
      </form>
    </div>
  );
};

export default SignUp;
