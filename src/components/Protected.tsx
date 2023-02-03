import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Homepage from '../pages/Homepage'

const Protected = () => {
    const auth = true
  return (
    <div>
    {auth ? <Outlet/> : <Navigate to="/"/>}
    </div>
  )
}

export default Protected
