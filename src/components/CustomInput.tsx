import React from 'react'

interface Inputprops {
  onChange: (x:any)=> void;
  type:string;
  name: string;
  placeholder? :string;
  value?:string | number
  min?:number;
  max?: number;
  accept?: string;
  required?:boolean;
  multiple?: boolean

}
const CustomInput = (props:Inputprops) => {
  const {type, name, onChange, min, max, placeholder, accept, value, required, multiple}= props
  return (
    <input accept={accept} type={type} min={min} max={max} name={name} value={value} onChange={onChange} required={required} multiple={multiple} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}/>
  )
}

export default CustomInput