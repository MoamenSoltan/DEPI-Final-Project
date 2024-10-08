import React, { useState } from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";


// install react icons

// here we made a div with similar styling to the input-box tag , to be able to display the icons correctly inside the box
const PasswordInput = ({value,onChange,placeholder}) => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    
    const toggleShowPassword = () => { 
        
        setIsShowPassword(!isShowPassword)
    }
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 roun mb-3' >

        <input className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none' value={value} onChange={onChange} placeholder={placeholder||"password"} type={isShowPassword?"text":"password"} />
        {/* <button type='button' onClick={toggleShowPassword}>
            {isShowPassword? <BiSolidHide /> : <BiSolidShow />}
        </button> */}

{
            isShowPassword? <BiSolidHide className='text-primary' onClick={toggleShowPassword} /> :
            <BiSolidShow className='text-gray-400' onClick={toggleShowPassword} />
        }
        
        {/* not a button because it refreshes the page , directly use the icon //not in a button */}
        {/* or in a button but specify the type to button  */}
    </div>
  )
}

export default PasswordInput