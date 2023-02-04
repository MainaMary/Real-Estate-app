import React from 'react'
import CustomButton from './CustomButton'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 const menuList = [
    {path: "/", label:"Home"},
    {path: "/offers", label:"Offers"}
 ]
  return (
    <div className='flex items-center justify-between h-16 px-8'>
        <h2>Logo design</h2>
        <ul>
            {menuList.map(label =>
            <NavLink key={label.label} to={label.path}>{label.label}</NavLink>)}
        </ul>
        <div className='flex'>
            <CustomButton name="Sign in"/>
            <CustomButton name="Sign up"/>
          
        </div>
    </div>
  )
}

export default Navbar