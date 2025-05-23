import React from 'react'

const FailedTask = ({data}) => {
  return (
    
      <div className='flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl p-5'>

<div className='flex justify-between rounded items-center '> 
  <h3 className='bg-red-300 px-3 py-1 rounded '>{data.category}</h3>
  <h3 className='text-sm'>{data.taskDate}</h3>
</div>
<h2 className='mt-5 text-2xl font-semibold'> {data.taskTitle} </h2>
<p className='text-sm mt-2'>
 {data.taskDescription}
</p>
<div className='mt-2'>
  <button className='bg-red-500 py-1 px-2 text-sm mt-2 w-full'> Failed </button>
</div>

    </div>
  )
}

export default FailedTask