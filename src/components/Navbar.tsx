import React from 'react'
import CustomButton from './CustomButton'
import { NavLink , useNavigate} from 'react-router-dom'

const Navbar = () => {
 const menuList = [
    {path: "/", label:"Home"},
    {path: "/offers", label:"Offers"}
 ]
 const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between h-16 px-8'>
        <h2>Logo design</h2>
        <ul>
            {menuList.map(label =>
            <NavLink key={label.label} to={label.path}>{label.label}</NavLink>)}
        </ul>
        <div className='flex'>
            <CustomButton name="Sign in" onClick={() => navigate('/login')}/>
            <CustomButton name="Sign up" onClick={() => navigate('/register')}/>
          
        </div>
    </div>
  )
}

export default Navbar