import React from 'react'

const AcceptTask = ({data}) => {
  return (
    
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
    
      <div className='flex justify-between rounded items-center '> 
        <h3 className='bg-red-800 px-3 py-1 rounded '>{data.category}</h3>
        <h3 className='text-sm'>{data.taskDate}</h3>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'> {data.taskTitle} </h2>
      <p className='text-sm mt-2'>
       {data.taskDescription}
      </p>
<div  className=' mt-4 '>
  <button className='bg-green-500 py-1 px-2 text-sm w-full'>
    Mark as Completed
  </button >
  <button className='bg-red-500 py-1 px-2 text-sm mt-2 w-full'>Mark as Failed</button>
</div>

    </div>
  )
}

export default AcceptTask