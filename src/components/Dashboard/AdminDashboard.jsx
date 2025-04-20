import React from 'react'
import Header from '../others/Header'
import TaskForm from '../others/TaskForm'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-8'>
        <Header changeUser={props.changeUser}/>
       <TaskForm />
<AllTask />
    </div>
  )
}

export default AdminDashboard