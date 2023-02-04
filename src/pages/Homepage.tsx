import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignUp from './auth/SignUp'
import Image from "../assets/realEstate.svg"
const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
        <div className='flex '>
           <div className='w-1/2'>
            <SignUp/>
           </div>
           <div className='w-1/2'>
            <img src={Image} className="w-full h-auto"/>
           </div>
        </div>
    </div>
  )
}

export default Homepage