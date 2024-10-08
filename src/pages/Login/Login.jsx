import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'

const Login = () => {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)
  // can be set to ""
  // null becuase when ever it isnt , then a text will be displayed (thats why we used a short circuit)
  // for the validation

  const handleLogin = async (e) => {
    // this function is the result of login btn , therefore e.preventDefault is required
    e.preventDefault()

    if(!validateEmail(email)){
      setError("please enter a valid email")
      return;
          //terminate the function immediately and return to parent caller 
    }
    if (!password){
      // we can make a regex for the password aswell 
      setError("please enter a password")
      return;
    }

    setError("")
    // default value after pressing the button , to not make it null
    
    //login API Call

  }
  // fragment to not add any styling
  return (
    <>
       <Navbar/>
       <div className="flex items-center justify-center mt-28">
         <div className='w-96 border rounded bg-white px-7 py-10'>


              <form onSubmit={handleLogin}>

                <h4 className="text-2xl mb-7">Login</h4>

                <input type="text" placeholder="Email" className="input-box" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <PasswordInput value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  {
                    error && (
                      <p className='text-red-500 text-xs pb-1'>{error}</p>
                    )
                  }

                <button type='submit' className='btn-primary'>Login</button>

                <p className="text-sm text-center mt-4">
                  Not registered yet? {" "}
                  <Link to={'/signup'} className="font-medium text-primary underline">Create an Account</Link>
                </p>
              </form>
          </div>
       </div>
    </>
  )
}

export default Login