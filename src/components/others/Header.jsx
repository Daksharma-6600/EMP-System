import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const [username, setUsername] = useState('')



  const logOutUser =()=>
  {
localStorage.setItem('loggedInUser','')
props.changeUser('')

  }
  
  return (
    <div  id="one" className='flex items-end justify-between'>
<h1 className='text-2xl font-medium '>Hello, <br /> <span className='text-3xl font-semibold'>Sir/Madam👋</span></h1>
<button onClick={logOutUser} className='bg-red-700  text-lg font-medium text-white px-5 py-2'>log out</button>

    </div>
  )
}

export default Header