import React,{useState} from 'react'
import CustomButton from './CustomButton'
import { NavLink , useNavigate} from 'react-router-dom'
import {FiMenu} from "react-icons/fi"
import {IoMdClose} from "react-icons/io"

const Navbar = () => {
const [openMenu, steOpenMenu] = useState<boolean>(false)
 const menuList = [
    {path: "/", label:"Home"},
    {path: "/offers", label:"Offers"}
 ]
 const handleMenu = () =>{
  steOpenMenu(prev => !prev)
 }
 const navigate = useNavigate()
  return (
    <nav className='flex z-20 bg-white items-center justify-between h-32'>
        <h4>Logo design</h4>
        <ul className={openMenu ? "block bg-red-300 top-20 w-full fixed" :" w-[10%] md:flex justify-between hidden"}>
            {menuList.map(label =>
            <li key={label.label}>
              <NavLink  to={label.path} className={({isActive})=> isActive ? " text-primary-color border-b-2 border-primary-color" :""}>{label.label}</NavLink>
            </li>
            )}
        </ul>
        <div className=' hidden md:flex'>
            <CustomButton onClick={() => navigate('/login')}>Sign in</CustomButton>
            <CustomButton  onClick={() => navigate('/register')}>Sign up</CustomButton>
          
        </div>
        <div className=' block md:hidden' onClick={handleMenu}>
          {openMenu ? <IoMdClose/> : <FiMenu/>}
        </div>
    </nav>
  )
}

export default Navbar