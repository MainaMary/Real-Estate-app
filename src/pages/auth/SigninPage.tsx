import SignIn from './SignIn'
import AuthLayout from '../../components/AuthLayout'

const SigninPage = () => {
  return <AuthLayout children={<SignIn/>}/>
}

export default SigninPage