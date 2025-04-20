import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submithandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded'>
        <form 
        onSubmit={(e)=>{
          submithandler(e)
        }}
        className='flex flex-col items-center justify-center'>
<input 
value={email}
onChange={(e)=>{
  setEmail(e.target.value)
}}
required className ='text-black out border-2 border-emerald-600 py-4 px-5 text-xl bg-transparent  rounded-full'type="email"placeholder='Enter Your email' />
<input 
value={password}
onChange={(e)=>{
  setPassword(e.target.value)
}}

className ='text-black out border-2 border-emerald-600 py-4 px-5 text-xl bg-transparent mt-5  rounded-full' type="password" placeholder='Enter your PassKeys' />
<button className ='text-black out border-none bg-emerald-600 py-4 px-5 text-xl  mt-5  rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login