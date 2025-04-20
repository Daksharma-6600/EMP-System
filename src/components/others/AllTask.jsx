import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

      const [userData , setUserData]=useContext(AuthContext)

  return (
    <div  id="adtask"className='bg-[#1c1c1c] p-5 rounded'>

<div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-3'>
<h2 className='text-xl font-medium w-1/5 '>Employee Name</h2>
<h3 className='text-xl font-medium w-1/5'>New task</h3>
<h3 className=' text-xl font-medium w-1/5 '>Active Task</h3>
<h3 className=' text-xl font-medium w-1/5'>Completed Task</h3>
<h3 className=' text-xl font-medium w-1/5'>Failed Task</h3>

      </div>
<div className=' overflow-auto'>
{userData.map(function(e,idx){
return <div key={idx} className='border-2 border-pink-300 py-2 px-4 flex justify-between rounded mb-3'>
<h2 className='w-1/5 text-xl font-medium'>{e.firstName}</h2>
<h3  className='w-1/5 text-xl font-medium text-blue-400'>{e.taskNumbers.newtask}</h3>
<h5 className='w-1/5 text-xl font-medium text-yellow-400'>{e.taskNumbers.active}</h5>
<h3 className='w-1/5 text-xl font-medium  text-emerald-400'>{e.taskNumbers.completed}</h3>
<h3 className=' text-xl font-medium  w-1/5 text-red-400'>{e.taskNumbers.failed}</h3>

      </div>

})}
</div>

    </div>
  )
}

export default AllTask