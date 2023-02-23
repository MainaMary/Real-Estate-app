import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const Protected = () => {
  const {currentUser} = useAuthContext()
    const auth = true
  return (
    <div>
    {currentUser ? <Outlet/> : <Navigate to="/"/>}
    </div>
  )
}

export default Protected
