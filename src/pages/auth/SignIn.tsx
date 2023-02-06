import React,{useReducer} from 'react'
import { formReducer } from '../../reducer/formReducer'
import { signInWithEmailAndPassword } from 'firebase/auth'


const SignIn = () => {
  const initialState = {
  
    email: '',
    password:''
}
  const [state, dispatch] = useReducer<any>(formReducer, initialState)
  const handleInputChange= (event:any)=>{
    const {name, value} = event.target
    dispatch({
      type: ActionTypes.textInput,
      payload: { key: [name], value: value },
    })
  }
  const {email, password} = state
  return (
    <div>SignIn</div>
  )
}

export default SignIn