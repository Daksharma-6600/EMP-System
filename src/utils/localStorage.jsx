
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newtask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Complete the monthly report",
        taskDate: "2025-04-10",
        category: "Admin"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Update website content",
        taskDate: "2025-04-12",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newtask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 3",
        taskDescription: "Fix bugs in the app",
        taskDate: "2025-04-08",
        category: "Quality Assurance"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 4",
        taskDescription: "Prepare the presentation for the client",
        taskDate: "2025-04-15",
        category: "Sales"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: true,
        taskTitle: "Task 5",
        taskDescription: "Organize the team meeting",
        taskDate: "2025-04-13",
        category: "Management"
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newtask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Admin Task 1",
        "taskDescription": "Review employee performance",
        "taskDate": "2025-04-11",
        "category": "Administration"
      }
    ]
  }
];



export const setLocalStorage=()=>
  {
    localStorage.setItem('employees', JSON.stringify(employees))

    localStorage.setItem('admin', JSON.stringify(admin))


}

export const getLocalStorage=()=>{


     const employees = JSON.parse(localStorage.getItem('employees'))

     const admin = JSON.parse(localStorage.getItem('admin'))

     return {employees,admin}
}
