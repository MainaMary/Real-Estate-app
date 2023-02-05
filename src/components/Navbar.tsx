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
    <div className='flex items-center justify-between h-32'>
        <h2>Logo design</h2>
        <ul className=' w-[10%] flex justify-between'>
            {menuList.map(label =>
            <li key={label.label}>
              <NavLink  to={label.path} className={({isActive})=> isActive ? " text-primary-color border-b-2 border-primary-color" :""}>{label.label}</NavLink>
            </li>
            )}
        </ul>
        <div className='flex'>
            <CustomButton onClick={() => navigate('/login')}>Sign in</CustomButton>
            <CustomButton  onClick={() => navigate('/register')}>Sign up</CustomButton>
          
        </div>
    </div>
  )
}

export default Navbar