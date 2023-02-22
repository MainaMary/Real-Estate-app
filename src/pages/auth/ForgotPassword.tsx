import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomLabel from '../../components/CustomLabel'
import CustomInput from '../../components/CustomInput'

const ForgotPassword = () => {
  return (
    <form>
         <div className="my-4">
          <CustomLabel>Name</CustomLabel>
          {/* <CustomInput placeholder="John Doe" name="name" onChange={handleInputChange} type="text" value={name || ''}/>
          <p className="text-red-500">{formErrors.name}</p> */}
        </div>
    </form>
  )
}

export default ForgotPassword