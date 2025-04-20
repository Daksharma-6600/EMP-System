import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const TaskForm = () => {


   const [userData , setUserData]= useContext(AuthContext)

const [taskTitle , setTaskTitle] = useState('')
const [taskDecription, setTaskDecription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')



const [apnatask, setApnaTask] = useState({})


  const submitHandler=(e)=>{
e.preventDefault()

setApnaTask({taskTitle,taskDate,category,taskDecription,active: false, NewTask:true,failed:false,completed:false})

const data=userData

  data.forEach(function(e){
    if(assignTo==e.firstName)
  {
    e.tasks.push(apnatask)
    e.taskNumbers.newtask= e.taskNumbers.newtask+1
  }
  })
  setUserData(data)
  console.log(data);
  





setTaskTitle('')
setTaskDate('')
setAssignTo('')
setCategory('')
setTaskDecription('')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-white text-xl font-semibold mb-4">Create Task</h2>
      <form onSubmit={(e)=>{
submitHandler(e)
      }}
      className="space-y-4">
        <div>
          <label className="text-white block mb-1">Task Title</label>
          <input value={taskTitle} onChange={(e)=>{
setTaskTitle(e.target.value)
          }}
           type="text" placeholder="Make a UI design" className="w-full p-2 rounded-md bg-gray-700 text-white " />
        </div>
        <div>
          <label className="text-white block mb-1">Date</label>

          <input 
          value={taskDate} onChange={(e)=>{
            setTaskDate(e.target.value)
         }}
          type="date" className="w-full p-2 rounded-md bg-gray-700 text-white " />
        </div>
        <div>
          <label className="text-white block mb-1">Assign to</label>
          <input
          value={assignTo} onChange={(e)=>{
            setAssignTo(e.target.value)
            }}
          type="text" placeholder="employee name" className="w-full p-2 rounded-md bg-gray-700 text-white " />
        </div>
        <div>
          <label className="text-white block mb-1">Category</label>
          <input 
          value={category} onChange={(e)=>{
            setCategory(e.target.value)
            }}
          type="text" placeholder="design, dev, etc" className="w-full p-2 rounded-md bg-gray-700 text-white" />
        </div>
        <div>
          <label className="text-white block mb-1">Description</label>
          <textarea 
          value={taskDecription} onChange={(e)=>{
            setTaskDecription(e.target.value)

            }} className="w-full p-2 rounded-md bg-gray-700 text-white " rows="4" placeholder='explain about the assigned task'></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md font-semibold">Create Task</button>
      </form>
    </div>
  </div>

  )
}

export default TaskForm