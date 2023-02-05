import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignUp from './auth/SignUp'
import Image from "../assets/realEstate.svg"
const Homepage = () => {
    
  return (
    <div className='h-screen '>
      <Navbar/>
        <div className='flex items-center mt-8'>
           <div className='w-full md:w-[40%]'>
            <SignUp/>
           </div>
           <div className='w-[60%]'>
            <img src={Image} className="hidden md:block w-full h-auto"/>
           </div>
        </div>
    </div>
  )
}

export default Homepage