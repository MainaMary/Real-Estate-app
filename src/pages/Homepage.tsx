import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div>Homepage
        <div className='flex'>
            <button onClick={() =>navigate('/login')}>Sign in</button>
            <button onClick={() =>navigate('/register')}>Sign up</button>
        </div>
    </div>
  )
}

export default Homepage