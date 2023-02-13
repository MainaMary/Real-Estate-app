import React, { ReactNode } from 'react'
import Image from "../assets/realEstate.svg"

interface Props {
children : JSX.Element
}
const AuthLayout = ({children}:Props) => {
  return (
    <div className="flex items-center mt-8">
      <div className="w-full md:w-[40%]">
        {children}
      </div>
      <div className="w-[60%]">
        <img src={Image} className="hidden md:block w-full h-auto" />
      </div>
    </div>
  )
}

export default AuthLayout