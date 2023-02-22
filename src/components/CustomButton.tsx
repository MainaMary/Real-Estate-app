import React, { ReactNode } from 'react'

interface BtnProps {
    name?:string ;
    icon?: ReactNode;
    onClick?:(x:any)=>void;
    type?: "button" | "submit" | "reset";
    children?: string | ReactNode,
    className?: string

}
const CustomButton = (props:BtnProps) => {
const {name, onClick, type, children, className=''} = props
  return (
    <button className={`flex h-auto items-center focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900` + className} onClick={onClick} type={type}>{children}</button>
  )
}

export default CustomButton