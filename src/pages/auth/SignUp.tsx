import React,{useReducer, useState} from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomInput from "../../components/CustomInput";
import CustomLabel from "../../components/CustomLabel";
import { formReducer } from "../../reducer/formReducer";
import { ActionTypes } from "../../model/types";


const SignUp = () => {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const initialState = {
    name:'',
    email: ''
}

  const [state, dispatch]:any = useReducer<any>(formReducer, initialState)
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
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{error}</p>
        <div>
          <CustomLabel>Name</CustomLabel>
          <CustomInput name="name" onChange={handleInputChange} type="text" value={name}/>
        </div>
        <div>
          <CustomLabel>Email</CustomLabel>
          <CustomInput name="email" onChange={handleInputChange} type="text"  value={email}/>
        </div>
        <div>
          <CustomLabel>Password</CustomLabel>
          <CustomInput name="password" onChange={handleInputChange} type="text" value={password}/>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
